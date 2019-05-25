var summer_crns = localStorage.getItem("crns_3");
summer_crns = JSON.parse(summer_crns);
summer_crns_txt = ""
if (summer_crns != null) {
    for (var i = 0; i < summer_crns.length; i++) {
        if (i == 0) {
            summer_crns_txt = summer_crns[i];
        } else {
            summer_crns_txt += ", " + summer_crns[i]
        }
    }
}
$('#summer').val(summer_crns_txt);