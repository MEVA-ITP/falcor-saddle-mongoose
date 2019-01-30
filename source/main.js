const test = async () => {
    console.log("Testing the test")
}

test()
    .then((x) => console.log("Finished", x))
    .catch((err) => console.error("Error", err))