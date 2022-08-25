//2. create your resume data in JSON format.

var resume = {
    "name": "Dharun Gandhi",
    "Email": "dharungandhi28@gmail.com",
    "phone num": "945xxxxxxx",
    "locationn": {
        "address": "47, bazar street",
        "postal code": "6212xx",
        "city": "Trichy",
        "country": "India"
    },
    "voluenteer": [{
        "organization": "Student guidence of service (SGS)",
        "position": "cooprative member",
        "start date": "01-06-2019",
        "End date": "01-06-2021",
        "Summary": "It is a type of voluenteer which is helpful for students to participate technical activities"
    }],
    "Education": [{
        "institution": "Dr.MCET",
        "area": "Computer science",
        "Study type": "Bachelore",
        "Start date": "01-06-2018",
        "End date": "18-05-2022",
        "Score": "7.5 cgpa",
        "courses": [
            "DB"-"Mysql"
        ]
    }],
    "Skills": [{
        "Certificate": "Machine Learning",
        "date": "22-05-2021",
        "issure": "IBM"
    }],
    "Publications": [{
        "Name": "Web Development",
        "Level": "Beginner",
        "Keywords": [
            "Html",
            "CSS",
            "Javascript"
        ]
    }],
    "Languages": [{
        "language": "Tamil, English",
        "fluency": "Native speaker"
    }],
    "Intrest": [{
        "Name": "swimming",
        "keywords": [
            "100 m",
            "200 m"
        ]
    }],
    "Projects": [{
        "Name": "Machine Learning",
        "Description": "TO develop the agriculture crop recommendation based on soil fertility",
        "Highlights": [
            "Best of 3 in college"
        ],
        "Keywords": [
            "Python",
            "Machine learning algorithms"
        ],
        "Start date": "07-02-2022",
        "End date": "02-05-2022"
    }]
}
console.log(resume);