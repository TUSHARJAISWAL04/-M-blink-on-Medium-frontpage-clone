setInterval(() => {
    for (let i = 97; i < 113; i++) {
        const rand1 = Math.floor(Math.random(28) * 27) + 1;
        const rand2 = Math.floor(Math.random(28) * 27) + 1;
        const rand3 = Math.floor(Math.random(28) * 27) + 1;
        const rand4 = Math.floor(Math.random(28) * 27) + 1;

        const currElement = document.getElementsByClassName(
            String.fromCharCode(i) + rand1
        );

        const currElement2 = document.getElementsByClassName(
            String.fromCharCode(i) + rand2
        );

        const currElement3 = document.getElementsByClassName(
            String.fromCharCode(i) + rand3
        );

        const currElement4 = document.getElementsByClassName(
            String.fromCharCode(i) + rand4
        );

        setTimeout(() => {
            currElement[0].innerHTML = "";
            currElement2[0].innerHTML = "";
            currElement3[0].innerHTML = "";
            currElement4[0].innerHTML = "";

            setTimeout(() => {
                currElement[0].innerHTML = "M";
                currElement2[0].innerHTML = "M";
                currElement3[0].innerHTML = "M";
                currElement4[0].innerHTML = "M";
            }, 800);
        }, 800);
    }
}, 500);
