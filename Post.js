async function createPost() {
    const newPost = {
        title: "My first post",
        body: "This is my first post",
        userId: 1
    };

    const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newPost)
        }
    );

    if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
    }

    const result = await response.json();
    console.log(result);
}

createPost().catch(console.error);