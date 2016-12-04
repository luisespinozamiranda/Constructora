var projects = [];
var id = "";
var name = "";
var date = "";
var associates = "";
var icon = "";

var Persister = {
    save: function(key, value) {
        localStorage.setItem(key, value);
    },
    load: function(key, default_value) {
        return localStorage.getItem(key) || default_value;
    },
    saveObj: function(key, value) {
        var json_string = JSON.stringify(value);
        this.save(key, json_string);
    },
    loadObj: function(key, default_value) {
        var json_string = this.load(key, default_value);
        return JSON.parse(json_string);
    },
    deleteItem: function(key) {
        localStorage.removeItem(key);
    }
};
/*carga los datos del modal*/
function load_Projects() {
    $("tbody tr").remove();
    projects = Persister.loadObj('projects', '[]');
    for (var i = 0; i < projects.length; i++) {
        id = projects[i].id;
        name = projects[i].name;
        date = projects[i].date;
        associates = projects[i].associates;
        icon = projects[i].icon;
        $('tbody').append('<tr class="trprojects" id=' + id + '><td class="table-striped"> <h1>' + id + '</h1></td><td class="table-striped"> <h1>' + name + '</h1></td><td class="table-striped"> <h1>' + associates + '</h1></td><td class="table-striped"><h1>' + date + '</h1></td><td class="table-striped"> <h1>' + icon + '</h1></td><td class="table-striped"><a class="btnDelete"><span class="glyphicon glyphicon-trash" aria-hidden="true" ></span></a></td></tr>');
    }
}
jQuery(document).ready(function($) {
	load_Projects();
    $("#add").click(function() {
        $("#startDate").val(today());
    });
});
	//total de projectos
function projectsCount () {
	return projects.length;
}
	// toma la fecha del sistema
function today () {
	var f = new Date();
    return date=(f.getDate() + "/" + (f.getMonth() + 1) + "/" + f.getFullYear());
}