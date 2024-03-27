const jobs = [
    {
        title: "Advertising and Marketing",
        image: "../assets/government.jpg",
        details: "Creative director, Copywriter, Graphic Designer, Marketing coordinator, Social media coordinator",
        openPositions: "20",
        link: "advertising-marketing.html",
    },
    
    {
        title: "Management Sciences and Administration",
        image: "../assets/government.jpg",
        details: "Aeronautical engineer, Aircraft designer, Aircraft mechanic, Aviation manager, Pilot",
        openPositions: "4",
        link: "management-sciences.html",
    },

    {
        title: "Education",
        image: "../assets/government.jpg",
        details: "Agronomist, Farmer, Food inspector, Landscape designer, Wildlife biologist",
        openPositions: "1",
        link: "education.html",
    },

    {
        title: "Science and Technology",
        image: "../assets/government.jpg",
        details: "Application developer, Computer programmer, Information security analyst, Software engineer, Web developer.",
        openPositions: "4",
        link: "science-and-tech.html",
    },

    {
        title: "Mining and Engineering",
        image: "../assets/government.jpg",
        details: "Application developer, Computer programmer, Information security analyst, Software engineer, Web developer.",
        openPositions: "4",
        link: "mining-and-engineering.html",
    },

    {
        title: "General",
        image: "../assets/government.jpg",
        details: "Application developer, Computer programmer, Information security analyst, Software engineer, Web developer.",
        openPositions: "4",
        link: "general.html",
    },

    

]

const jobsHeading = document.querySelector(".jobs-list-container h2");
const jobsContainer = document.querySelector(".jobs-list-container .jobs");
const jobSearch = document.querySelector(".jobs-list-container .job-search");

let searchTerm = "";


if (jobs.length == 1) {
    jobsHeading.innerHTML = `${jobs.length} Job`;
} else {
    jobsHeading.innerHTML = `${jobs.length} Jobs`;
}

const createJobsListingCards = () => {
    
    jobsContainer.innerHTML = "";

    jobs.forEach((job) => {
        if (job.title.toLowerCase().includes(searchTerm.toLowerCase())) {
            let jobCard = document.createElement("div");
            jobCard.classList.add("job");

            let image = document.createElement("img");
            image.src = job.image;

            let title = document.createElement("h3");
            title.innerHTML = job.title;
            title.classList.add("job-title");

            let details = document.createElement("div");
            details.innerHTML = job.details;
            details.classList.add("details");

            let detailsBtn = document.createElement("a");
            detailsBtn.href = job.link;
            detailsBtn.innerHTML = "More Details"
            detailsBtn.classList.add("details-btn");

            let openPositions = document.createElement("span");
            openPositions.classList.add("open-positions");

            if(job.openPositions == 1) {
                openPositions.innerHTML = `${job.openPositions} open position`;
            } else {  
                openPositions.innerHTML = `${job.openPositions} open positions`;
            }

            jobCard.appendChild(image);
            jobCard.appendChild(title);
            jobCard.appendChild(details);
            jobCard.appendChild(detailsBtn);
            jobCard.appendChild(openPositions);

            jobsContainer.appendChild(jobCard);
        }
    });
}

createJobsListingCards();

jobSearch.addEventListener("input", (e) => {
    searchTerm = e.target.value;

    createJobsListingCards();
});