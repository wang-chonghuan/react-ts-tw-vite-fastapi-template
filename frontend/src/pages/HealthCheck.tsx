import { useEffect, useState } from 'react'
import axios from 'axios'

function HealthCheck() {
  const [health, setHealth] = useState<string>('')

  useEffect(() => {
    const checkHealth = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/health`)
        setHealth(response.data.status)
      } catch (error) {
        setHealth('Error connecting to server')
      }
    }
    
    checkHealth()
  }, [])

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <p className="mt-4 text-center text-gray-600">
          Server Status: {health}
        </p>
      </div>
    </div>
  )
}

export default HealthCheck
