import "./social-network.css";

async function getFriends() {
  const response = await fetch("https://randomuser.me/api/?results=10");
  const friends = await response.json();
  const friendNodeWrapper = document.querySelector("#friends");
  friends.results.forEach(friend => {
    let name = `${friend.name.first} ${friend.name.last}`;
    let nameParagraph = document.createElement("p");
    nameParagraph.textContent = name;

    let picture = friend.picture.large;
    let pictureTag = document.createElement("img");
    pictureTag.src = picture;
    pictureTag.alt = name;

    let personWrapper = document.createElement("div");
    personWrapper.classList.add("person");
    personWrapper.appendChild(nameParagraph);
    personWrapper.appendChild(pictureTag);

    friendNodeWrapper.appendChild(personWrapper);
  });
}

getFriends();
