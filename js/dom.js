document.getElementById("apply-bg").addEventListener("click", function () {
	const friends = document.getElementsByClassName("friend");
	for (const friend of friends) {
		friend.style.backgroundColor = "lightgreen";
	}
});
document.getElementById("third-center").addEventListener("click", function () {
	const thirdFried = document.getElementById("third-friend");
	thirdFried.style.textAlign = "center";
});
document.getElementById("add-friend").addEventListener("click", function () {
	const friendList = document.getElementById("friends");
	const friend = document.createElement("div");
	friend.classList.add("friend");
	friend.innerHTML = `
           <h3 class="friend-name">New Friend Added</h3>
					<p>
						Minima debitis aliquid iure, beatae libero quisquam dolore voluptate
						in?
					</p>
  `;
	friendList.appendChild(friend);
});
