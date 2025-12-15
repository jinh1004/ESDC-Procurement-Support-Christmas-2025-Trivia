const questions = [
    { 
        question: "How do you say 'Christmas' in French?", 
        answers: ["Kurisumasu","Krismäs","Weihnachten","Noël"], 
        correct: 3,
        image: "images/French.jpg",
        credit: "The Best Christmas Markets in Canada - Canadian Affair",
        message:[
            "Kurisumasu is the romanization of the Japanese word for Christmas 'クリスマス'",
            "Krismäs is something I made up. Hopefully the umlaut gave it an air of legitimacy though",
            "Weihnachten is the German term for Christmas",
            "The French term for Christmsd is indeed Noël"
        ]
    },
    { 
        question: "We all know Santa Claus, but he goes by many other names as well. Which of the following is not a common name for Santa Claus?", 
        answers: ["Saint Nicholas","Father Christmas","Elder Noël","Old Saint Nick"], 
        correct: 2,
        image: "images/Santa Claus.jpg",
        credit: "Santa Claus - Christmas Wiki",
        message:[
            "Saint Nicholas, patron saint of children, sailors, merchants, amonst other groups, was a bishop in the year 270-343 from modern-day Turkey",
            "He was famous for gift-giving and helping out the poor and his feast day on December 6th eventually became associated with giving small presents in Europe"
        ]
    },
    { 
        question: "Which of the following species is not commonly used for Christmas trees?", 
        answers: ["Pine","Oak","Fir","Spruce"], 
        correct: 1,
        image: "images/Christmas Tree.jpg",
        credit: "Why Christmas Trees? Learn About Christmas Trees - The Living Urn",
        message:[
            "Pine, Fir, and Spruce are all considered evergreen trees, meaning they keep their leaves (needles) all year-round",
            "Oak trees meanwhile are deciduous meaning that they shed their leaves in the fall"
        ]
    },
    { 
        question: "The Church of Rome formally started celebrating Christmas on December 25 around the year 336. Who was the Roman Emperor reigning at the time?", 
        answers: ["Julius Caesar","Constantine I","Constantine II","Augustus"], 
        correct: 1,
        image: "images/Roman.jpg",
        credit: "Have Yourself a Roman Christmas! Here's How Ancient Holiday Customs Live on Today - artnet",
        message:[
            "Julius Caesar lives from 100 to 44 BC, a far-cry from 336 AD",
            "Constantine I also known as Constantine the Great was the first Roman emperor to convert to Christianity",
            "Constantine II is Constantine I's son who while interesting, is only an option here to confuse",
            "Augustus, also known as Octavian, is the founder of the Roman Empire and thus the first emperor. His rule was from 27 BC to 14 AD and thus also many years prior to Constantine I"
        ]
    },
    { 
        question: "Christmas trees have been around in Germany for centuries, but it was not popularized in England and North America until 1949 after this famous Queen and her consort were illustrated with one? Who was this pair?", 
        answers: ["Queen Elizabeth I & Prince Robert","Queen Elizabeth II & Prince Philip","Queen Victoria & Prince Albert","Queen Mary I & Philip II of Spain"], 
        correct: 2,
        image: "images/Queen Victoria.jpg",
        credit: "How Queen <hidden due to spoiler> and Prince <hidden due to spoiler> Made Christmas Trees a Holiday Staple - Town & Country",
        message:[
            "Queen Elizabeth I reigned from 1558 - 1603",
            "Queen Elizabeth II reigned from 1952 - 2022",
            "Queen Victoria, who reigned from 1837 - 1901 (longer than any of her predecessors), was quite a trendsetter. Many traditions we observe today can be attributed to her",
            "Queen Mary I, more well-known as Bloody Mary, lived from 1553 - 1558"
        ]
    },
    { 
        question: "Which war saw the Christmas Truce of <Year hidden due to spoilers>, where there were a series of unofficial ceasefires occured and soldiers from opposite sides mingled and sometimes exchanged foods and souvenirs?", 
        answers: ["World War I","World War II","The American Revolution","The War of 1812"], 
        correct: 0,
        image: "images/Christmas Truce.jpg",
        credit: "The Christmas Truce - Wikipedia",
        message:[
            "The full name of this event is known as the Christmas Truce of 1914, and occured just a few months after the beginning of WWI which lasted from 1914-1918",
            "There were a few units who arranged ceasefires in the following years as well, but nowhere as widespread"
        ]
    },
    { 
        question: "What is this dessert we're looking at here?", 
        answers: ["Panettone","Croquembouche","Bûche de Noël","Baumkuchen"], 
        correct: 1,
        image: "images/Croquembouche.jpg",
        credit: "<Hidden for Spoiler> - Williams Sonoma",
        message:[
            "Panettone is a type of sweet Italian bread traditionally enjoyed around Christmas and New Year",
            "Croquembouche originates from France and it is a tower of profiteroles bound together with caramel. It's often used as a showpiece dessert because of its impressive height and elegance",
            "Bûche de Noël or Yule log is also a popular French festive dessert and has origins in the European Yule log tradition",
            "Baumkuchen is a traditional German cake often known as tree-cake. It's eaten during Christmas, but also weddings and birthdays amongst other occasions. It is commonly also given as gift in Japan"
        ]
    },
    { 
        question: "Which popular Christmas beverage is also sometimes called 'Milk Punch'?", 
        answers: ["Hot Chocolate","Mulled Wine","Eggnog","Apple Cider"], 
        correct: 2,
        image: "images/Milk Punch.jpg",
        credit: "66 Christmas Cocktail Recipes To Make Everyone's Spirits Bright - Food Network",
        message:[
            "For the uninitiated, eggnog is a chilled, sweetened, dairy-based beverage made from milk, cream, sugar, and egg. It is often also served with cinnamon or nutmeg on top",
            "While it's often times served cold, it can also be warmed, like apple cider",
            "The reason 'punch' is in the nickname is because it traditionally contains alcohol (again like apple cider) but today, you can find variations without it"
        ]
    },
    { 
        question: "Speaking of putting alcohol in Eggnog though... Which of the following spirit is not usually added to Eggnog?", 
        answers: ["Whisky (Whiskey in case you're Irish or from the US)","Brandy","Rum","Gin"], 
        correct: 3,
        image: "images/Eggnog.jpg",
        credit: "Homemade Eggnog - Delish",
        message:[
            "Rum is probably the most often used due to its warm and sweet flavor",
            "Brandy is often added for a rich note that complements the creamy texture",
            "Bourbon or Whiskey is a popular addition in the US for a slightly smoky or caramel-like flavor",
            "Gin meanwhile would give it more of a herbal flavor which is not what most people are looking for"
        ]
    },
    { 
        question: "You, me, and everyone on Earth loves poutine, but it's not the only shining star in Canadian cuisine. Which of the following is NOT a Canadian dish?", 
        answers: ["Croque Monsieur","Butter Tart","Tourtière","Pâté chinois"], 
        correct: 0,
        image: "images/Canadian Food.jpg",
        credit: "QUEUES DE CASTOR | BEAVERTAILS (SHERBROOKE) - Uber Eats",
        message:[
            "Croque Monsieur is a FRENCH sandwich smade with ham and cheese like Gruyère",
            "Butter Tart is a qintessential Canadian dessert especially in Ontario and across the English-speaking provinces",
            "Tourtière is a French-Canadian meat pie that is actually quite popular during Christmas and New Year's",
            "Pâté chinois is a classic Québécois comfort food similar to a shepard's pie that can really be enjoyed all year round. Despite its name, it's not Chinese"
        ]
    },
    { 
        question: "Which of the following Canadian city has never hosted a Winter Olympics game?", 
        answers: ["Calgary","Montreal","Vancouver"], 
        correct: 1,
        image: "images/Winter Olympics.jpg",
        credit: "Every Sport in the Winter Olympics, Ranked - Slate",
        message:[
            "Calgary, Alberta hosted the Winter Games in 1988",
            "Montreal, Québec hosted the SUMMER Games in 1976",
            "Vancouver, British Columbia hosted the Winter Games in 2010"
        ]
    },
    { 
        question: "This year, we saw the dishearting news that Hudson's Bay/The Bay is closing its doors. In its heyday though, it has acquired quite a few other department stores. Who is the imposter here?", 
        answers: ["Freimans","Morgan's","Harrods","Simpsons"], 
        correct: 2,
        image: "images/Hudson's Bay.jpg",
        credit: "Hudson's Bay (Department Store) - Wikipedia",
        message:[
            "Freimans, Morgan's, and Simpsons were all Canadian department stores that were eventually converted to The Bay",
            "Harrods meanwhile is a department store in London, England and is one of the oldest department stores in the world that's still standing"
        ]
    },
    { 
        question: "To us Canadians, Christmas and winter go hand-in-hand together, but that's not the case everywhere. Which of the following country is Christmas a summer celebration?", 
        answers: ["Sweden","Australia","China","Mexico"], 
        correct: 1,
        image: "images/Australian Christmas.jpg",
        credit: "7 Australian Christmas Traditions You May Not Know - Y Suites",
        message:[
            "The Northern Hemisphere & Southern Hemisphere's seasons are the opposite of one another, so winter for us is summer for them"
        ]
    },
    { 
        question: "Christmas may not be a traditional Japanese holiday, but in the 1970s, this fast food brand launched an extremely successful campaign and established itself as a holiday must-eat. Which chain was it?", 
        answers: ["Yoshinoya (吉野家)","Baskin-Robbins","KFC","Pizza Hut"], 
        correct: 2,
        image: "images/Japanese Christmas.jpg",
        credit: "Japanese Christmas Cake - Japan Centre",
        message:[
            "Yoshinoya is a Japanese fast food chain that specializes in gyūdon also known as beef bowls",
            "Baskin-Robbins is very well established in Korea for their Christmas ice cream cakes, but not in Japan",
            "Takeshi Okawara who managed the first KFC in Japan overheard some expats saying they missed eating turkey for Christmas and decided to come out with a party bucket in 1974 with the slogan 'Kentucky is Christmas! (ケンタッキーはクリスマス！)",
            "Pizza Hut has a massive presence in China and is sometimes associated with Christmas there, but not in Japan"
        ]
    },
    { 
        question: "In Western culture, we're told that naughty children will receive coal on Christmas, but in Central European folklore (which can be quite dark), there is another being or beings who might show up in front of them instead of Santa. Who is it/are they?", 
        answers: ["Baba Yaga","Krampus","Minotaur","Gnomes"], 
        correct: 1,
        image: "images/Krampus.jpg",
        credit: "Christmas - Britannica",
        message:[
            "Baba Yaga is a figure from Slavic folklore and is depicted as an old woman with a long nose and lives in a hut that stands on chicken legs. Her tale is not for the faint of heart",
            "Krampus is a horned, half-goat, half-demon creature who is the counter-part of Saint Nicholas",
            "Minotaur is a mythical creature in Greek mythology with the head of a bull and the body of the man. Nothing to do with Christmas",
            "Christmas gnomes are popular in Scandinavian folklores as mischievous protectors of homes and farms that bring luck and gifts. They are generally nice though"
        ]
    },
    { 
        question: "In the Chronicle of Narnia's second book/movie 'The Lion, the Witch and the Wardrobe/, what does Santa Claus give Susan & Lucy?", 
        answers: ["A bow and arrows & A healing potion","A bow and arrows & Turkish Delights","A healing potion & Turkish Delights","Baklava & Turkish Delights"], 
        correct: 0,
        image: "images/Narnia.jpg",
        credit: "The Lion, the Witch and the Wardrobe - Indigo",
        message:[
            "Turkish Delights is what the White Witch gives their sibling, Edmund",
            "Baklava is a delicious dessert with roots in the Byzantine and Ottoman Empires and today famous in Turkey though you can find variations in many cultures. It does not appear in the Narnia series though"
        ]
    },
    { 
        question: "In the Christmas movie 'Elf', what's the name of the main character acted by Will Ferrell?", 
        answers: ["Hobbs","Eldrin","Patrick","Buddy"], 
        correct: 3,
        image: "images/Elf.jpg",
        credit: "Elf (2003) - IMDb",
        message:[
            "If in doubt about what to watch on Christmas, this movie will never fail you"
        ]
    },
    { 
        question: "In the another classic Christmas movie, 'Home Alone 2: Lost in New York', our main character Kevin McCallister is finally reunited with his mother, Kate, at this location.", 
        answers: ["Times Square","Central Park","Rockefeller Center","FAO Schwarz"], 
        correct: 2,
        image: "images/Home Alone.jpg",
        credit: "Home Alone 2: Lost in New York - Wikipedia",
        message:[
            "The Rockefeller Center Christmas Tree is traditionally a Norway spruce measuring at least 75 feet tall and 45 feet in diameter which for the rest of the world is around 23 meters high and 14 meters in diameter. It's not the tallest Christmas tree in the world, but it's certainly a sight to behold",
            "FAO Schwarz is the real-life toy store that inspired Duncan's Toy Chest in the movie"
        ]
    },
    { 
        question: "In the original poem 'A Visit from St. Nicholas' more commonly known by the name 'The Night Before Christmas', we are introduced to the reindeers that pull Santa's sleigh: Dasher, Dancer, Prancer, Vixen, Comet, Cupid, Donner, and Blitzen. The 9th reindeer we love today named Rudolph however, does not come from the same poem. Who is the creator?", 
        answers: ["Clement C. Moore, the author of the poem","Johnny Marks the songwriter behind 'Rudolf the Red-Nosed Reindeer'","Robert L. May, an author for Montgomery Ward department store","Frank Capra, the director of iconic Christmas movie 'It's a Wonderful Life'"], 
        correct: 2,
        image: "images/Rudolph.jpg",
        credit: "Gene Autry Rudolph the Red-Nosed Reindeer - Genius",
        message:[
            "In 1939, Robert L. May was asked by his boss at Montgomery Ward to write a 'cheery children's book' with an animal as titular character, having been inspired by Walt Disney's recently released short-film, Ferdinand the Bull",
            "So while some might think it was Clement C. Moore who invented Rudolph along with the remaining 8 reindeers, it was in fact not the case"
        ]
    },
    { 
        question: "Who is the author of the novella 'A Christmas Carol'?", 
        answers: ["Clement C. Moore","Charles Dickens","Lucy Maud Montgomery","J.D. Salinger"], 
        correct: 1,
        image: "images/A Christmas Carol.jpg",
        credit: "A Christmas Carol - Disney Wiki",
        message:[
            "As mentioned in question 19, Clement C. Moore is the author of the poem 'The Night Before Christmas'",
            "Aside from famous works like 'Olivver Twist', 'A Tale of Two Cities', and 'Great Expectations', Charles Dickens is also the author of A Christmas Carol",
            "Lucy Maud Montgomery is the Canadian author behind 'Anne of Green Gables'. Though not quite Christmas-related, is a heart-warming read if you're in the mood for a change of pace this Christmas",
            "J.D. Salinger is the author of the behind 'The Catcher in the Rye'. Not quite Christmas themed either, but the story does take place in December of 1949"
        ]
    }
];

let currentQuestion = 0;
let score = 0;
let time = 0;
let timerInterval;

const questionEl = document.querySelector(".question");
const answersEl = document.querySelector(".answers");
const feedbackEl = document.querySelector(".feedback");
const nextBtn = document.getElementById("next-btn");
const scoreEl = document.getElementById("score");
const timerEl = document.getElementById("timer");
const questionNumberEl = document.getElementById("question-number");

const imageEl = document.getElementById("question-image");
const imageCreditEl = document.getElementById("image-credit");

function startTimer() {
    timerInterval = setInterval(() => {
        time++;
        timerEl.textContent = `Time: ${time}s`;
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
}

function showQuestion() {
    const q = questions[currentQuestion];
    questionEl.textContent = q.question;
    answersEl.innerHTML = "";
    feedbackEl.innerHTML = "";
    nextBtn.style.display = "none";

    questionNumberEl.textContent = `Question ${currentQuestion + 1} of ${questions.length}`;
    scoreEl.textContent = `Score: ${score}/${questions.length}`;

    // Image handling
    if (q.image) {
        imageEl.src = q.image;
        imageEl.style.display = "block";
        imageEl.alt = q.question;
        imageCreditEl.textContent = q.credit || "";
    } else {
        imageEl.style.display = "none";
        imageCreditEl.textContent = "";
    }

    startTimer();

    q.answers.forEach((answer, index) => {
        const btn = document.createElement("button");
        btn.textContent = answer;
        btn.className = "answers-button";
        btn.addEventListener("click", () => checkAnswer(index));
        answersEl.appendChild(btn);
    });
}

function checkAnswer(selectedIndex) {
    stopTimer();
    const allButtons = document.querySelectorAll(".answers .answers-button");
    allButtons.forEach(btn => btn.disabled = true);

    const q = questions[currentQuestion];
    const isCorrect = selectedIndex === q.correct;
    if (isCorrect) score++;

    scoreEl.textContent = `Score: ${score}/${questions.length}`;

    // Display correct/incorrect message above bullet points
    feedbackEl.innerHTML = ""; // clear previous
    // Create the correct/incorrect message div
    const statusDiv = document.createElement("div");
    statusDiv.className = "answer-status";  // base class
    statusDiv.textContent = isCorrect ? "Correct!" : "Incorrect!";

    // Add the correct/incorrect class for color
    statusDiv.classList.add(isCorrect ? "correct" : "incorrect");

    // Append it to the feedback container
    feedbackEl.appendChild(statusDiv);

    // Display 4 bullet points
    const ul = document.createElement("ul");
    q.message.forEach(msg => {
        const li = document.createElement("li");
        li.textContent = msg;
        ul.appendChild(li);
    });
    feedbackEl.appendChild(ul);

    nextBtn.style.display = "inline-block";
}


nextBtn.addEventListener("click", () => {
    currentQuestion++;
    if (currentQuestion < questions.length) showQuestion();
    else {
        questionEl.textContent = `Quiz Finished! Final Score: ${score}/${questions.length}`;
        answersEl.innerHTML = "";
        feedbackEl.innerHTML = "";
        questionNumberEl.textContent = "";
        imageEl.style.display = "none";
        imageCreditEl.textContent = "";
        nextBtn.style.display = "none";
        stopTimer();
    }
});

// Start game
showQuestion();






