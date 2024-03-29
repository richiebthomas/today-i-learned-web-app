const button_open = document.querySelector(".button-open");
const form = document.querySelector(".fact-form");
const factsList = document.querySelector(".facts-list");
const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];

//Create DOM elements
factsList.innerHTML = "";

function createFactsList(dataArray) {
  const htmlArr = dataArray.map(
    (fact) => `<li class="fact">
  <p>
  ${fact.text}
  <a
    class="source"
    href=${fact.source}
    >(Source)</a
  >
</p>
<span class="tag" style="background-color: #3b82f6"
  >${fact.category}</span
>
  </li>`
  );

  const html = htmlArr.join("");

  factsList.insertAdjacentHTML("afterbegin", html);
}

//Toggle form visibility
button_open.addEventListener("click", function () {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    button_open.textContent = "Close";
  } else {
    form.classList.add("hidden");
    button_open.textContent = "Share a fact";
  }
});

//load from supabase
loadFacts();

async function loadFacts() {
  const res = await fetch(
    "https://xlagpemjziclkmenurtj.supabase.co/rest/v1/fact",
    {
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhsYWdwZW1qemljbGttZW51cnRqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDM4Mzk0ODMsImV4cCI6MjAxOTQxNTQ4M30.HPJc2JIRr4LpVVesF2U8LZKJAdIrIlSemaa9WvXbj-g",
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhsYWdwZW1qemljbGttZW51cnRqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDM4Mzk0ODMsImV4cCI6MjAxOTQxNTQ4M30.HPJc2JIRr4LpVVesF2U8LZKJAdIrIlSemaa9WvXbj-g",
      },
    }
  );
  const data = await res.json();
  createFactsList(data);
}
