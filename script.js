function checkMessage() {

    const message = document.getElementById("message").value.toLowerCase();

    if (message.trim() === "") {
        alert("Please enter a financial message.");
        return;
    }

    const riskWords = [
        "guaranteed",
        "guarantee",
        "double",
        "profit",
        "limited",
        "urgent",
        "act now",
        "telegram",
        "whatsapp",
        "send money",
        "invest immediately",
        "100% return",
        "daily returns",
        "no risk",
        "sure profit"
    ];

    let detected = [];

    riskWords.forEach(function(word) {

        if (message.includes(word)) {
            detected.push(word);
        }

    });

    let score = detected.length * 10;

    if (score > 100) {
        score = 100;
    }

    const result = document.getElementById("result");
    const title = document.getElementById("riskTitle");
    const scoreBox = document.getElementById("riskScore");
    const indicators = document.getElementById("indicators");
    const explanation = document.getElementById("explanation");

    result.classList.remove("hidden");

    indicators.innerHTML = "";

    if (score >= 50) {

        title.innerHTML = "⚠️ HIGH RISK CONTENT";
        scoreBox.innerHTML = "Risk indicator score: " + score + "/100";

        detected.forEach(function(item) {

            const li = document.createElement("li");

            li.innerHTML = "Potential warning sign: <b>" + item + "</b>";

            indicators.appendChild(li);

        });

        explanation.innerHTML =
            "This message contains multiple patterns that may be associated " +
            "with potentially misleading or deceptive financial content. " +
            "Verify the claim independently before taking action.";

    } else if (score >= 20) {

        title.innerHTML = "⚠️ CAUTION ADVISED";
        scoreBox.innerHTML = "Risk indicator score: " + score + "/100";

        detected.forEach(function(item) {

            const li = document.createElement("li");

            li.innerHTML = "Potential warning sign: <b>" + item + "</b>";

            indicators.appendChild(li);

        });

        explanation.innerHTML =
            "Some potentially risky patterns were detected. " +
            "This does not prove that the content is fraudulent. " +
            "Verify the information before acting.";

    } else {

        title.innerHTML = "ℹ️ NO MAJOR WARNING PATTERNS DETECTED";
        scoreBox.innerHTML = "Risk indicator score: " + score + "/100";

        const li = document.createElement("li");

        li.innerHTML = "No major predefined warning patterns detected.";

        indicators.appendChild(li);

        explanation.innerHTML =
            "No major predefined warning patterns were detected. " +
            "This does not prove that the message is genuine. " +
            "Always independently verify financial claims.";
    }

    result.scrollIntoView({
        behavior: "smooth"
    });
}
