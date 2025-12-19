import { useState, useEffect } from 'react'

// Compress image to fit localStorage limit
function compressImage(file: File, maxWidth = 800, quality = 0.7): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = (e) => {
      const img = new Image()
      img.onload = () => {
        const canvas = document.createElement('canvas')
        let { width, height } = img

        // Scale down if needed
        if (width > maxWidth) {
          height = (height * maxWidth) / width
          width = maxWidth
        }

        canvas.width = width
        canvas.height = height

        const ctx = canvas.getContext('2d')
        if (!ctx) {
          reject(new Error('Failed to get canvas context'))
          return
        }

        ctx.drawImage(img, 0, 0, width, height)
        const compressed = canvas.toDataURL('image/jpeg', quality)
        resolve(compressed)
      }
      img.onerror = reject
      img.src = e.target?.result as string
    }
    reader.onerror = reject
    reader.readAsDataURL(file)
  })
}

export function usePersistedPhoto(key: string): [string | null, (file: File | null) => void] {
  const [photoUrl, setPhotoUrl] = useState<string | null>(null)

  // Load from sessionStorage on mount
  useEffect(() => {
    const saved = sessionStorage.getItem(key)
    if (saved) {
      setPhotoUrl(saved)
    }
  }, [key])

  const setPhoto = (file: File | null): void => {
    if (!file) {
      setPhotoUrl(null)
      sessionStorage.removeItem(key)
      return
    }

    // Compress and store
    compressImage(file)
      .then((compressed) => {
        setPhotoUrl(compressed)
        try {
          sessionStorage.setItem(key, compressed)
        } catch (e) {
          console.warn('sessionStorage full, photo not persisted')
        }
      })
      .catch((err) => {
        console.error('Failed to compress image:', err)
      })
  }

  return [photoUrl, setPhoto]
}

export function usePersistedPhotos(key: string, count: number): [
  (string | null)[],
  (index: number, file: File | null) => void
] {
  const [photoUrls, setPhotoUrls] = useState<(string | null)[]>(() => Array(count).fill(null))

  // Load from sessionStorage on mount
  useEffect(() => {
    const saved = sessionStorage.getItem(key)
    if (saved) {
      try {
        const parsed = JSON.parse(saved)
        if (Array.isArray(parsed)) {
          setPhotoUrls(parsed)
        }
      } catch {
        // Invalid JSON, ignore
      }
    }
  }, [key])

  const setPhoto = (index: number, file: File | null): void => {
    if (!file) {
      setPhotoUrls((prev) => {
        const newUrls = [...prev]
        newUrls[index] = null
        try {
          sessionStorage.setItem(key, JSON.stringify(newUrls))
        } catch {
          // Ignore storage errors
        }
        return newUrls
      })
      return
    }

    // Compress and store
    compressImage(file, 600, 0.6)
      .then((compressed) => {
        setPhotoUrls((prev) => {
          const newUrls = [...prev]
          newUrls[index] = compressed
          try {
            sessionStorage.setItem(key, JSON.stringify(newUrls))
          } catch (e) {
            console.warn('sessionStorage full, photos not persisted')
          }
          return newUrls
        })
      })
      .catch((err) => {
        console.error('Failed to compress image:', err)
      })
  }

  return [photoUrls, setPhoto]
}
