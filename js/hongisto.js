// Hongisto

function window_calculation() {
    // Virheilmoitusten määrittäminen vakioksi
    const ERROR_MIN = "Minimum height and width of window is 50cm.";
    const ERROR_MAX = "Maximum height and width of window is 200cm.";
    const ERROR_NO_AMOUNT = "No amount. 1 assumed.";
    const ERROR_EQUAL = "No more than 10 equal size windows.";

    // Tulostuselementtien tyhjennys
    document.getElementById("error").innerHTML = "";
    document.getElementById("wood").innerHTML = "";
    document.getElementById("glass").innerHTML = "";
    document.getElementById("woods").innerHTML = "";
    document.getElementById("glasses").innerHTML = "";
    document.getElementById("size").innerHTML = "";

    // Muuttujien määritys
    let height = Number(document.getElementById("window_height").value);
    let width = Number(document.getElementById("window_width").value);
    let amount = Number(document.getElementById("window_amount").value);

    // Virheilmoitukset
    if (height < 50 || width < 50) {
        document.getElementById("error").innerHTML = ERROR_MIN;
        return;
    }
    if (height > 200 || width > 200) {
        document.getElementById("error").innerHTML = ERROR_MAX;
        return;
    }
    if (amount == 0) {
        document.getElementById("error").innerHTML = ERROR_NO_AMOUNT;
        if (amount == 0)
            amount = 1;
    }
    if (amount > 10) {
        document.getElementById("error").innerHTML = ERROR_EQUAL;
        return;
    }

    // Muuttujien nimeäminen ja laskutoimikset
        // Puukehyksen leveys on 6 cm ja ikkuna on 1 cm kehyksen sisällä
    let glassHeight = height - 10;
    let glassWidth = width - 10 ;
    let area = glassHeight * glassWidth;
        // Ikkunoissa on kehykset lasin kummallakin puolella ja kehyksen leveys on 6 cm
    let amountOfWood = (height * 2) + ( width * 2) + ((height - 12) * 2) + ((width - 12) * 2);

    // Tulokset ja niiden määrittäminen senttimetreistä metreiksi
    document.getElementById("wood").innerHTML = amountOfWood /100;
    document.getElementById("glass").innerHTML = area / 10000;
    document.getElementById("woods").innerHTML = amountOfWood * amount / 100;
    document.getElementById("glasses").innerHTML = area * amount / 10000;

    // Ikkunoiden luokitus pinta-alan mukaan
    if (area / 10000 <= 0.5) {
        document.getElementById("size").innerHTML = "small window";
    } else if ( area / 10000 <= 1.5) {
        document.getElementById("size").innerHTML = "medium window";
    } else if (area / 10000 <= 2.5) {
        document.getElementById("size").innerHTML = "large window";
    } else {
        document.getElementById("size").innerHTML = "huge window";
    }

}