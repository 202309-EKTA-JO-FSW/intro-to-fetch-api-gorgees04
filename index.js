// Please read the README.md to understand what to do. Happy Coding !
const fetchUserData = async () => {
    try {
        const resp = await fetch("https://jsonplaceholder.typicode.com/users ")
        const data = await resp.json()

        // Storing Data in usersData
        const usersData = data

        // Modifeing Data 
        const usersInfo = usersData.map(user => {
            return {
                name: user.name,
                username: user.username,
                email: user.email,
                address: user.address.street,
                phone: user.phone,
                website: user.website,
                company: user.company.name
            }
        })
        console.log(usersInfo)
    
        // Filter the Data
        const filtaredData = usersInfo.filter(user => user.email.endsWith(".biz"))
        console.log(filtaredData)
    

        // Sort the Data alphabetically 
        const sortedData = usersInfo.sort((a, b) => a.name.localeCompare(b.name))
        console.log(sortedData)
        
    } catch (error) {
        console.error('Error:', error);
      }
}


fetchUserData()