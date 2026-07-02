const userContainer = document.getElementById("userContainer");
const loading = document.getElementById("loading");
const error = document.getElementById("error");
const searchInput = document.getElementById("searchInput");

let users = [];

async function fetchUsers() {
    loading.textContent = "Loading users...";
    error.textContent = "";

    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }

        users = await response.json();

        displayUsers(users);
        loading.textContent = "";
    } catch (err) {
        loading.textContent = "";
        error.textContent = err.message;
    }
}

function displayUsers(userList) {
    userContainer.innerHTML = "";

    userList.forEach(user => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <h3>${user.name}</h3>
            <p>Email: ${user.email}</p>
            <p>City: ${user.address.city}</p>
        `;

        userContainer.appendChild(card);
    });
}

searchInput.addEventListener("input", () => {
    const searchText = searchInput.value.toLowerCase();

    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(searchText)
    );

    displayUsers(filteredUsers);
});

fetchUsers();