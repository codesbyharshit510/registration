document.addEventListener("DOMContentLoaded", function() {
    const username = "codesbyharshit519"; 
    const apiUrl = `https://api.github.com/users/codesbyharshit510`;

    
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Update HTML with fetched data
            document.getElementById("avatar").src = data.avatar_url;
            document.getElementById("username").textContent = data.login;
            document.getElementById("name").textContent = data.name || "N/A";
            document.getElementById("bio").textContent = data.bio || "No bio available";
            document.getElementById("location").textContent = data.location || "Location not provided";
            document.getElementById("repos").textContent = data.public_repos;
            document.getElementById("followers").textContent = data.followers;
            document.getElementById("following").textContent = data.following;
        })
        .catch(error => {
            console.error("Error fetching the GitHub profile:", error);
        });
});
