// ================================
// SMART COINLET FIRM - MAIN SCRIPT
// ================================

document.addEventListener("DOMContentLoaded", () => {

    // --------------------------------
    // SCF SETTINGS
    // --------------------------------

    const defaultSettings = {
        backgroundImage: "",
        announcement: "Welcome to Smart Coinlet Firm.",
        announcementVisible: true
    };

    // Load saved settings
    let scfSettings;

    try {
        scfSettings = JSON.parse(
            localStorage.getItem("scfSettings")
        ) || defaultSettings;
    } catch (error) {
        scfSettings = defaultSettings;
    }

    // --------------------------------
    // APPLY BACKGROUND
    // --------------------------------

    if (scfSettings.backgroundImage) {
        document.body.style.backgroundImage =
            `url("${scfSettings.backgroundImage}")`;

        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "center";
        document.body.style.backgroundAttachment = "fixed";
    }

    // --------------------------------
    // ANNOUNCEMENT
    // --------------------------------

    let announcementBox =
        document.getElementById("scfAnnouncement");

    if (announcementBox) {

        if (scfSettings.announcementVisible) {
            announcementBox.textContent =
                scfSettings.announcement;

            announcementBox.style.display = "block";
        } else {
            announcementBox.style.display = "none";
        }
    }

    // --------------------------------
    // GET STARTED BUTTON
    // --------------------------------

    const getStartedButton =
        document.getElementById("getStarted");

    if (getStartedButton) {

        getStartedButton.addEventListener("click", () => {

            alert(
                "Welcome to Smart Coinlet Firm."
            );

        });
    }

    // --------------------------------
    // SCF LOADED
    // --------------------------------

    console.log(
        "SCF website loaded successfully."
    );
});
