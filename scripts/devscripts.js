// for conference detail on pop-up
$(".agenda-wrapper-section .agenda-tab-content .agenda-tab-details .open-agenda-popup").click(function (e) {
    var nodeId = $(this).attr("data-sessionid");
    var date = $(this).attr("data-date");
    debugger
    var data = { nodeId: nodeId, date: date };
    $.ajax({
        url: '/?altTemplate=AjaxConferenceDetails',
        type: 'GET',
        data: data,
        success: function (result) {
            var activeTab = $('#session-content');
            activeTab.empty();
            activeTab.append($.parseHTML(result));
        },
        error: function (error) {
            console.log(error.responseText);
        }
    });
});

window.onload = function() {
    var sections = document.querySelectorAll('.two-col-form-background');

    sections.forEach(function(section) {
        var freeTextHeading = section.querySelector('.free_text__heading');
        if (freeTextHeading) {
            var freeTextHeadingHeight = freeTextHeading.offsetHeight + 30;
            var formThumbnailImage = section.querySelector('.form-thumbnail-image');
            formThumbnailImage.style.height = 'calc(100% - ' + freeTextHeadingHeight + 'px)';
        }
    });
};

// Delegate accordion 
  $('.delegate-card .delegate-acco-header').click(function () {
    $(this).toggleClass('active').next('.delegate-acco-content').slideToggle();
    $('.delegate-acco-header').not(this).removeClass('active').next('.delegate-acco-content').slideUp();
  });

/*For umbraco form */
$(".umbraco-forms-field-wrapper select").change(function () {
    var $selectedOption = $(this).val();
    var $shortAnswer = $(this).closest('.umbraco-forms-field ').next('.shortanswer');
    console.log($shortAnswer)
    if ($selectedOption == "Other") {
        $shortAnswer.toggleClass('show-text-box');
    } else {
        $shortAnswer.removeClass('show-text-box');
    }
});


$(".umbraco-forms-field-wrapper select").change(function () {
    var $selectedOption = $(this).val();
    var $shortAnswer = $(this).closest('.umbraco-forms-field ').next('.dropdown');
    console.log($shortAnswer)
    if ($selectedOption == "Decision Maker" || $selectedOption == "Purchaser / Buyer") {
        $shortAnswer.addClass('show-text-box');
    } else {
        $shortAnswer.removeClass('show-text-box');
    }
});

//Grid Agenda Popup
$(".agenda-accordion-wrapper .agenda-accordion-col .agenda-masonry .agenda-popup-click").click(function (e) {
    var nodeId = $(this).attr("data-sessionid");
    var date = $(this).attr("data-date");
    var data = { nodeId: nodeId, date: date };
    $.ajax({
        url: '/?altTemplate=AjaxConferenceGridDetailsPopUp',
        type: 'GET',
        data: data,
        success: function (result) {
            var activeTab = $('#session-content');
            activeTab.empty();
            activeTab.append($.parseHTML(result));
        },
        error: function (error) {
            console.log(error.responseText);
        }
    });
});


//Umbraco form applying condition for dropdown (date and time)
const dateSelect = document.querySelector('.prefereddate select');
const regularTimeDiv = document.querySelector('.umbraco-forms-field.preferredtime:not(.alternating)');
const alternativeTimeDiv = document.querySelector('.umbraco-forms-field.preferredtime.alternating');
 
// Initially hide both time divs
regularTimeDiv.style.display = 'none';
alternativeTimeDiv.style.display = 'none';
 
// Add event listener to the date select
dateSelect.addEventListener('change', function() {
    const selectedDate = this.value;
    // Hide both time divs initially
    regularTimeDiv.style.display = 'none';
    alternativeTimeDiv.style.display = 'none';
    // Show appropriate time div based on selected date
    if (selectedDate === '4th November 2024' || 
        selectedDate === '5th November 2024' || 
        selectedDate === '6th November 2024') {
        regularTimeDiv.style.display = 'block';
    } else if (selectedDate === '7th November 2024') {
        alternativeTimeDiv.style.display = 'block';
    }
    // Reset time selections when date changes
    regularTimeDiv.querySelector('select').value = '';
    alternativeTimeDiv.querySelector('select').value = '';
});