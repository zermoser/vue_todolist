import { defineStore } from 'pinia'
import axios from 'axios'

const BASE_URL = 'https://66405b27a7500fcf1a9d9672.mockapi.io'

export const useTodoStore = defineStore('todo', {
  state: () => ({
    list: [],
    selectedTodo: {},
    statuses: ['Pending', 'Doing', 'Done']
  }),
  actions: {
    async loadTodos () {
      try {
        const response = await axios.get(`${BASE_URL}/todos`)
        this.list = response.data
      } catch (error) {
        console.log('error', error)
      }
    },
    async loadTodo (id) {
      try {
        const response = await axios.get(`${BASE_URL}/todos/${id}`)
        this.selectedTodo = response.data
      } catch (error) {
        console.log('error', error)
      }
    },
    async addTodo (todoText) {
      const bodyData = {
        name: todoText,
        status: 'Pending'
      }
      try {
        const response = await axios.post(`${BASE_URL}/todos`, bodyData)
        console.log(response.data)
      } catch (error) {
        console.log('error', error)
      }
    },
    async editTodo (todoData, id) {
      try {
        const bodyData = {
          name: todoData.name,
          status: todoData.status
        }
        const response = await axios.put(`${BASE_URL}/todos/${id}`, bodyData)
        console.log(response.data)
      } catch (error) {
        console.log('error', error)
      }
    },
    async removeTodo (id) {
      try {
        const response = await axios.delete(`${BASE_URL}/todos/${id}`)
        console.log(response.data)
      } catch (error) {
        console.log('error', error)
      }
    }
  }
})