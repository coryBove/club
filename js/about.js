// This content appears on the About page. Text between double quotes can be edited.
// Don't remove quotes ("), backticks(`), <p> or <br>, unless you know what you're doing.
// Whatever is INSIDE the quotes, and not one of the things above, will appear on the About page as plain text.

var aboutItems = 
{
    item1 : {
        name : "A place for rest, recovery, and fellowship.",
        description : `
        <p>
        Upstairs we have a cafe serving snacks, food, and drinks. Come play pool, darts, watch TV, read, hangout.
        </p>
        <p>
        Check out our <a href="index.html">schedule</a>.
        </p>
        <p>
        Stop in or call to find out more.
        </p>
        `
    },
    item2 : {
        name : "History of The Club and Recognition of it's Early Members",
        description :
         
        `
        <p>
        Shortly after the close of World War II, a group of AAs formed the Camel Club on State Street
        <br>
        in Akron near the Mayflower Hotel. Frank K and Larry H were charter members of
        <br>
        that group. The Camel Club disbanded but reorganized as the Akron Arid Club on Locust Street; to
        <br>
        Howard Street; to Adolf Avenue; to East Market Street. On the evening of November 19, 1965,
        <br>
        the Akron Arid Club was destroyed by fire. Frank K who was then club manager, together
        <br>
        with a small group of fellow AAs, relocated the Akron Arid Club to 2209 Front Street here in
        <br>
        Cuyahoga Falls. This location was previously occupied by the Orioles Club. Frank K as the
        <br>
        newly elected President, and Karl W as the new Secretary of the Akron Arid Club, filed a
        <br>        
        Certificate of Amendment to our Articles of Incorporation with the State of Ohio changing our
        <br>
        corporate name and principal office to pARIDise, Inc.; 2209 Front STreet, Cuyahoga Falls, Ohio.
        <br>
        The amendment was approved and filed by the Secretary of the State of Ohio on February 28,
        <br>
        1966. The original charter of the Akron Arid Club with the attached name change amendment is
        <br>
        included among our club records. During the 1966 Founders Day Week-End, Bill Wilson, Co-
        <br>
        Founder of Alcoholics Anonymous, congradulated the members on these fine facilities and was
        <br>
        speaker for our Friday Night meeting.
        </p>
        
        <p>
        The downtown Akron area was in need of clubhouse facilities so a group of AAs with the same
        <br>
        dedication that was shown by the people that formed the Cuyahoga Falls club, opened their own
        <br>
        club at 984 East Market Street (the vacated offices of the Singer Sewing Machine Company).
        <br>
        They intended to name this new organization the REBOS Club (sober spelled backwards) but
        <br>
        with the recent release of the "Akron Arid Club" name, it seemed more desirable to continue
        <br>
        with that well established name.
        </p>

        <p>
        It is our intent to provide a history of the pARIDise Club; but more importantly, to pay homage
        <br>
        to those people that contributed so much to get this club started. In varying degrees, they gave
        <br>
        their time, ideas and efforts. Many donated $50.00 each to provide the club with a beginning
        <br>
        financial base. Some contributed far more than what was expected, and conversely, some less.
        <br>
        However, all deserve a special tribute.
        </p>

        <br>
        Charles B
        <br>
        Victor C (deceased)
        <br>
        Mike D
        <br>
        Carl D (deceased)
        <br>
        Tom E (deceased)
        <br>
        Andy E
        <br>
        Lore E (deceased)
        <br>
        Chick F
        <br>
        Joe F
        <br>
        Hank G
        <br>
        Jim H (deceased)
        <br>
        Ed H
        <br>
        Hank H (deceased)
        <br>
        Larry H (deceased)
        <br>
        Fred L
        <br>
        Frank K (deceased)
        <br>
        Sam L
        <br>
        Roland L (deceased)
        <br>
        Chet L (deceased)
        <br>
        Bruce M (deceased)
        <br>
        Shorty M (deceased)
        <br>
        Lou M (deceased)
        <br>
        Julie M
        <br>
        Skip M (deceased)
        <br>
        John & Marion M (deceased)
        <br>
        Wilma O
        <br>
        Carl S (deceased)
        <br>
        Joe S (deceased)
        <br>
        Jerry S
        <br>
        Ruby S
        <br>
        Lloyd S
        <br>
        Dave T (deceased)
        <br>
        Sam T (deceased)
        <br>
        Karl W (deceased)
        <br>

        `

    }
};

// Edit the portion below if you're comfortable with JavaScript

function displayAbout(aboutItems) {    
    for(x in aboutItems) {
        var mainDiv = document.getElementById('mainDiv');
        var div = document.createElement("div");
        var divColumn =document.createElement("div");
        var name = document.createElement("p");
        var description = document.createElement("p");
        
        name.className = "fw-bold";
        description.className = "lead";

        name.innerHTML = aboutItems[x].name;
        description.innerHTML =  aboutItems[x].description;                
        
        divColumn.appendChild(name);
        divColumn.appendChild(description);
        divColumn.className = "card";        

        div.appendChild(divColumn);

        mainDiv.appendChild(div);
    };
}

displayAbout(aboutItems);