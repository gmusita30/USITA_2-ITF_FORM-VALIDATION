function Forms() {
    var events = document.getElementById("eventsType");
    var title = document.getElementById("Eventtitle");
    var start = document.getElementById("startDate");
    var finish = document.getElementById("finishDate");
    var post = document.getElementById("postDate");

    if (events.value == "Choose") {
        alert("Please select an Event Type");
        return false;
    }
    else if (title.value == "") {
        alert("Please enter an Event Title");
        return false;
    }
    else if (start.value == "") {
        alert("Please specify Event Start Date");
        return false;
    }
    else if (finish.value == "") {
        alert("Please specify Event End Date");
        return false;
    }
    else if (post.value == "") {
        alert("Please put a posting date");
        return false;
    }
    else if (start.value > finish.value) {
        alert("The End of the Event should be later than the Start Date");
        return false;
    }
    else if (post.value >= start.value && post.value >= finish.value) {
        alert("Posting Date should be before the Event Start Date");
        return false;
    }
    else {
        document.getElementById("Submit").innerHTML = "";
        alert ("The Event Form has been successfully saved!");
        return true;
    check();
    }

}
Forms();