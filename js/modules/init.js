async function fetchEmployees() {
    try {
        const response = await fetch('./js/data/employees.json')
        const data = await response.json()
        return data
    } catch (error) {
        console.error(error)
    }

}
fetchEmployees()

export{fetchEmployees}