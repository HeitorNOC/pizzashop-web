import { api } from '../lib/axios'

export interface GetManagedRestaurantResponse {
  id: string
  name: string
  description: string | null
  managerId: string | null
  createdAt: Date | null
  updatedAt: Date | null
}

export async function getManagedRestaurant(): Promise<GetManagedRestaurantResponse> {
  const response = await api.get('/managed-restaurant')

  return response.data
}
