var Current_day = new Date();

var Day_name = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var Month_name = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var Custom_day, Custom_year, Custom_date, Custom_month, Custom_week;
var Event_number = 0;
var Event_Form;
function Close(event) {
    Event_number--;
    $("#Total_Event").html("Total&nbsp;Undo&nbsp;Events:&nbsp;&nbsp;" + Event_number);

    $(".Event-"+event).remove();
}
function Add_Attempt() {
    Event_number++;
    $("#Total_Event").html("Total&nbsp;Undo&nbsp;Events:&nbsp;&nbsp;" + Event_number);

    var Block = function (event, classN) {
        return $(document.createElement(event)).addClass(classN);
    };
    var $Event = $('#tab2');
    var Cur_Date = Custom_date + "/" + Custom_month + "/" + Custom_year;
    $Event.append(Block('div', 'Event-' + Event_number)
            .append(Block('div', 'am-g')
                        .append(Block('p', 'Event_Header am-u-lg-10').html(Event_Form[0]))
                        .append(Block('a', "am-close").attr("href", "javascript:Close("+ Event_number + ")").html("&times;")))
            .append(Block('p', 'Event_Container').html("Starts: " + Event_Form[1] + "&nbsp;" + Cur_Date + "<br>" + "Ends :" + Event_Form[2] + "&nbsp;" + Cur_Date + "<br>" + "Note: " + Event_Form[3])));

    // $(".Event_Header").html(Event_Form[0]);
    // $(".Event_Container").html("Starts: " + Event_Form[1] + "&nbsp;" + Cur_Date + "<br>" + "Ends :" + Event_Form[2] + "&nbsp;" + Cur_Date + "<br>" + "Note: " + Event_Form[3]);
}

$(function() {
    $('#Submitter').on('click', function() {
        $('#my-prompt').modal({
            relatedTarget: this,
            onConfirm: function(e) {
                Event_Form = e.data;
                Add_Attempt();
            },
            onCancel: function(e) {
                // alert('Add Failed');
            }
        });
        $('.am-modal-prompt-input').val("");
        $('#Start_input').val("8:00 AM");
        $('#End_input').val("1:00 PM");
    });
});

function Changing_Day(event) {
    Custom_day = new Date(event);
    Custom_year = Custom_day.getFullYear();
    Custom_month = Custom_day.getMonth();
    Custom_date = Custom_day.getDate();
    Custom_week = Custom_day.getDay();
}

function Get_Current_Number(Year, Month) {
    var isLeapYear = function(Leap_event) {
        var f = new Date();
        f.setYear(Leap_event);
        f.setMonth(1);
        f.setDate(29);
        return f.getDate() === 29;
    };
    var Feb = (isLeapYear(Year) === true) ? (29) : (28);
    var Month_Days = [31, Feb, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return Month_Days[Month - 1];
}

function Modify_Header_date() {
    var Display_date = document.getElementById("Cur_date");
    var Tmp_date = Custom_date % 10;
    var Ordinal = (Tmp_date === 1) ? ('st'): ((Tmp_date === 2) ? ('nd'): ((Tmp_date === 3) ? ('rd'): ('th')));
    Display_date.innerHTML = '<p class="Font_Input Form_Font" id="Cur_date">' + Day_name[Custom_week] + ', ' + '<br>' + Custom_date + '<sup>' + Ordinal + '</sup>' + '&nbsp;&nbsp;' +  Month_name[Custom_month] + ',&nbsp;&nbsp;' + Custom_year + '</p>';
}

function Modify_Info() {
    if (Custom_year !== 2017) return;
    Festival_Judgment(Custom_month + 1, Custom_date);
}

function Modify_Status_bar() {
    Modify_Header_date();
    Modify_Info();
}

function Generate_Day_blocks() {

    var Current = document.getElementById('Month_Wrapper');

    for (var i = 1; i <= 7; i++) {
        var Cur_Day_name = document.createElement('li');
        Cur_Day_name.innerHTML = Day_name[i % 7];
        $(Cur_Day_name).addClass('Day_name');
        $(Current).append(Cur_Day_name);
    }

    for (i = 1; i <= 42; i++) {
        var Cur_day = document.createElement('li');
        Cur_day.innerHTML = i;
        $(Cur_day).addClass('Day');
        $(Current).append(Cur_day);
    }
}

function Modify_Pointer() {
    $(document).find('.Day').removeClass('selected').removeAttr('style');
    var Current = Custom_date + '-' + (Custom_month + 1) + '-' + Custom_year;
    $('#' + Current).addClass('selected');
}

function Click_day(event) {
    Custom_date = event;
    Modify_Status_bar();
}

$(document).on('click', '.This_month', function () {
    $(document).find('.Day').removeClass('selected').removeAttr('style');
    $(this).addClass('selected');
});

function Generate_Day_numbers(event) {
    var Current = new Date();
    Current.setFullYear(Custom_year, event - 1, 0);
    var Start_Day = Current.getDay();
    $(document).find('.Month_Header').html(Month_name[event - 1] + ' ' + Custom_year);
    $(document).find('.Day').html('&nbsp;');
    $(document).find('.Day').removeClass('This_month');
    var Current_Number = Get_Current_Number(Custom_year, event);
    for (var i = 1; i <= Current_Number; i++) {
        Start_Day++;
        $(document).find('.Day').eq(Start_Day - 1).addClass('This_month').attr('id', i + '-' + event + '-' + Custom_year).attr('onclick', 'Click_day('+ i +')').html(i);
    }

    if ((Custom_year === Current_day.getFullYear()) && (event - 1 === Current_day.getMonth())) {
        $(document).find('.Day.This_month').removeClass('Today').eq(Current_day.getDate() - 1).addClass('Today').css('color', '#95433b');
    }
    else {
        $(document).find('.Day.This_month').removeClass('Today').attr('style', '');
    }
}

function Generate_Day(event) {
    Generate_Day_blocks();
    Generate_Day_numbers(event);
}

function Remove_Day() {
    var Current = document.getElementById('Month_Wrapper');
    Current.innerHTML = "";
}

function Fan_In(event, Source) {
    var Current = document.getElementById('Year_Wrapper');
    Current.style.display = 'none';
    Current = document.getElementById('Month_Container');
    Current.style.display = 'block';
    Remove_Day();
    Generate_Day(event);
    if (Source === 'Year') Changing_Day(new Date(Custom_year, event-1, 1));
    Modify_Status_bar();
    Modify_Pointer();
}

function Fan_Out() {
    var Current = document.getElementById('Month_Container');
    Current.style.display = 'none';
    Current = document.getElementById('Year_Wrapper');
    Current.style.display = 'block';
    Modify_Status_bar();
    Modify_Pointer();
}

var Last = 'null', Last_Choose = 'null';
function Get_Current_Day() {
    var Current = document.getElementById('Topbar_Date_Chooser').value;
    if (Current !== Last_Choose) {
        Changing_Day(Current);
        Fan_In(Custom_month + 1, 'Specific');
        Last_Choose = Current;
    }
}
setInterval('Get_Current_Day()', 0);

function Init() {
    Changing_Day(Current_day);
    Modify_Status_bar();
    Modify_Pointer();
}
Init();
