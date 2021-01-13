const filters = document.getElementsByClassName("filter");
let current = document.getElementsByClassName("active");

drawTimetable(current[0].classList[1]);

for (let e of filters) {
    e.addEventListener("click", function() {
        current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace("active", "");
        this.className += " active";
        document.getElementById("timetable").innerHTML = "";
        drawTimetable(current[0].classList[1]);
    });
}

function drawTimetable(day) {
    let timetable = new Timetable();

    // On dessine une nouvelle grille selon le jour.
    // Utilisez le nom de classe attribuée à chaque jour pour donner la condition
    if (day == "vendredi") {
        // Définir les heures de la grille (heure de début, heure de fin).
        timetable.setScope(10, 00);

        // Définir les lieux de la grille.
        timetable.addLocations([
            "Cinéma Rex",
            "AS' Création",
            "Musée de montreux",
            "Théâtre Montreux-Riviera",
            "Ned"
        ]);

        // Premier événement:

        timetable.addEvent(
            // Artiste
            "Alien, le huitième passager",
            // Lieu
            "Cinéma Rex",
            //type
            //"film",
            // Date et heure de début (année, mois, jour, heure, minute)
            new Date(2021, 5, 7, 18, 30),
            // Date et heure de fin (année, mois, jour, heure, minute)
            new Date(2021, 5, 7, 20, 30),
            // URL Quand on clicke sur le lien
            {
                url: "../artiste.html"
            }
        );
        timetable.addEvent(
            // Artiste
            "Evil Dead 2",
            // Lieu
            "Cinéma Rex",

            //"film",
            // Date et heure de début (année, mois, jour, heure, minute)
            new Date(2021, 5, 7, 21, 00),
            // Date et heure de fin (année, mois, jour, heure, minute)
            new Date(2021, 5, 7, 22, 20),
            // URL Quand on clicke sur le lien
            {
                url: "../artiste.html"
            }
        );

        timetable.addEvent(
            // Artiste
            "Reverse Mountain",
            // Lieu
            "Ned",
            //"concert",

            // Date et heure de début (année, mois, jour, heure, minute)
            new Date(2021, 5, 7, 22, 40),
            // Date et heure de fin (année, mois, jour, heure, minute)
            new Date(2021, 5, 7, 23, 30),
            // URL Quand on clicke sur le lien
            {
                url: "../artiste.html"
            }
        );

        timetable.addEvent(
            // Artiste
            "Alt 236",
            // Lieu
            "Théâtre Montreux-Riviera",
            //"conference",
            // Date et heure de début (année, mois, jour, heure, minute)
            new Date(2021, 5, 7, 17, 00),
            // Date et heure de fin (année, mois, jour, heure, minute)
            new Date(2021, 5, 7, 18, 30),
            // URL Quand on clicke sur le lien
            {
                url: "../artiste.html"
            }
        );

        timetable.addEvent(
            // Artiste
            "Ian Bedermann",
            // Lieu
            "AS' Création",
            //"expo",
            // Date et heure de début (année, mois, jour, heure, minute)
            new Date(2021, 5, 7, 16, 00),
            // Date et heure de fin (année, mois, jour, heure, minute)
            new Date(2021, 5, 7, 20, 00),
            // URL Quand on clicke sur le lien
            {
                url: "../artiste.html"
            }
        );

        timetable.addEvent(
            // Artiste
            "H.R. Giger",
            // Lieu
            "Musée de montreux",
            //"expo",
            // Date et heure de début (année, mois, jour, heure, minute)
            new Date(2021, 5, 7, 10, 00),
            // Date et heure de fin (année, mois, jour, heure, minute)
            new Date(2021, 5, 7, 20, 00),
            // URL Quand on clicke sur le lien
            {
                url: "../artiste.html"
            }
        );

        let renderer = new Timetable.Renderer(timetable);
        renderer.draw(".timetable");
    }
    // Deuxième jour
    else if (day == "samedi") {
        timetable.setScope(10, 00);
        timetable.addLocations([
            "Cinéma Rex",
            "AS' Création",
            "Musée de montreux",
            "Ned"
        ]);

        timetable.addEvent(
            "Deathgasm",
            "Cinéma Rex",
            //"film",
            new Date(2021, 5, 8, 12, 00),
            new Date(2021, 5, 8, 13, 30), {
                url: "../artiste.html"
            }
        );

        timetable.addEvent(
            "Grizzly Man",
            "Cinéma Rex",
            //"film",
            new Date(2021, 5, 8, 14, 00),
            new Date(2021, 5, 8, 15, 40), {
                url: "../artiste.html"
            }
        );

        timetable.addEvent(
            "Werner Herzog",
            "Cinéma Rex",
            //"conference",
            new Date(2021, 5, 8, 15, 40),
            new Date(2021, 5, 8, 16, 30), {
                url: "../artiste.html"
            }
        );

        timetable.addEvent(
            "The Lighthouse",
            "Cinéma Rex",
            //"film",
            new Date(2021, 5, 8, 17, 00),
            new Date(2021, 5, 8, 18, 30), {
                url: "../artiste.html"
            }
        );

        timetable.addEvent(
            "Return of the living Dead",
            "Cinéma Rex",
            //"film",
            new Date(2021, 5, 8, 19, 00),
            new Date(2021, 5, 8, 20, 30), {
                url: "../artiste.html"
            }
        );

        timetable.addEvent(
            "Carpenter Brut",
            "Ned",
            //"concert",
            new Date(2021, 5, 8, 21, 00),
            new Date(2021, 5, 8, 22, 30), {
                url: "../artiste.html"
            }
        );

        timetable.addEvent(
            // Artiste
            "John Blanche",
            // Lieu
            "AS' Création",
            //"expo",
            // Date et heure de début (année, mois, jour, heure, minute)
            new Date(2021, 5, 8, 16, 00),
            // Date et heure de fin (année, mois, jour, heure, minute)
            new Date(2021, 5, 8, 20, 00),
            // URL Quand on clicke sur le lien
            {
                url: "../artiste.html"
            }
        );

        timetable.addEvent(
            // Artiste
            "H.R. Giger",
            // Lieu
            "Musée de montreux",
            //"expo",
            // Date et heure de début (année, mois, jour, heure, minute)
            new Date(2021, 5, 8, 10, 00),
            // Date et heure de fin (année, mois, jour, heure, minute)
            new Date(2021, 5, 8, 20, 00),
            // URL Quand on clicke sur le lien
            {
                url: "../artiste.html"
            }
        );

        let renderer = new Timetable.Renderer(timetable);
        renderer.draw(".timetable");
    }
    // Troisième jour
    else if (day == "dimanche") {
        timetable.setScope(10, 00);
        timetable.addLocations([
            "Cinéma Rex",
            "AS' Création",
            "Musée de montreux",
            "Ned"
        ]);

        timetable.addEvent(
            "Commando Ninja",
            "Cinéma Rex",
            //"film",
            new Date(2021, 5, 9, 13, 00),
            new Date(2021, 5, 9, 14, 00), {
                url: "../artiste.html"
            }
        );
        timetable.addEvent(
            "Jodorowsky's Dune",
            "Cinéma Rex",
            //"film",
            new Date(2021, 5, 9, 14, 30),
            new Date(2021, 5, 9, 15, 00), {
                url: "../artiste.html"
            }
        );

        timetable.addEvent(
            "Alejandro Jodorowsky",
            "Cinéma Rex",
            //"conference",
            new Date(2021, 5, 9, 14, 30),
            new Date(2021, 5, 9, 15, 20), {
                url: "../artiste.html"
            }
        );

        timetable.addEvent(
            "Lifeforce",
            "Cinéma Rex",
            //"film",
            new Date(2021, 5, 9, 15, 50),
            new Date(2021, 5, 9, 16, 40), {
                url: "../artiste.html"
            }
        );

        timetable.addEvent(
            "Hard To Be A God",
            "Cinéma Rex",
            //"film",
            new Date(2021, 5, 9, 17, 00),
            new Date(2021, 5, 9, 19, 50), {
                url: "../artiste.html"
            }
        );

        timetable.addEvent(
            "Mars Red Sky",
            "Ned",
            //"concert",
            new Date(2021, 5, 9, 20, 00),
            new Date(2021, 5, 9, 21, 20), {
                url: "../artiste.html"
            }
        );

        timetable.addEvent(
            // Artiste
            "John Blanche",
            // Lieu
            "AS' Création",
            //"expo",
            // Date et heure de début (année, mois, jour, heure, minute)
            new Date(2021, 5, 8, 16, 00),
            // Date et heure de fin (année, mois, jour, heure, minute)
            new Date(2021, 5, 8, 20, 00),
            // URL Quand on clicke sur le lien
            {
                url: "../artiste.html"
            }
        );

        timetable.addEvent(
            // Artiste
            "H.R. Giger",
            // Lieu
            "Musée de montreux",
            //"expo",
            // Date et heure de début (année, mois, jour, heure, minute)
            new Date(2021, 5, 9, 10, 00),
            // Date et heure de fin (année, mois, jour, heure, minute)
            new Date(2021, 5, 9, 20, 00),
            // URL Quand on clicke sur le lien
            {
                url: "../artiste.html"
            }
        );

        let renderer = new Timetable.Renderer(timetable);
        renderer.draw(".timetable");
    }
}