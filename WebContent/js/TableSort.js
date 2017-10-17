/**
 * 
 */


$(document).ready(function() {

	  $("#sortTable th").click(function() { //th를 클릭시 
	    var index = $(this).index(); //th의 index를 가져온다. 

	    var Columns = new Array(); //th의 index와 같은 tr의 td의 값을 담을 배열 
	    var newColumns = new Array(); // 정렬된 후의 값을 담을 배열 
	    var Rows = new Array(); //기존의 row담을 배열
	    var newRows = new Array(); //수정후의 row담을 배열 


	    $("#sortTable tr:gt(0)").each(function(i) { //가장 윗줄을 제외한  tr들을 가져온다. 
	      Rows.push($(this));
	      var textV = $(this).children().eq(index).text(); //tr에서 클릭한 th의 index와 같은 값
	      var arr = new Array(); // 2차 배열 만들 임시 배열
	      arr.push(i);
	      arr.push(textV);

	      Columns.push(arr); //값을 기존 칼럼 배열에 넣어준다. 
	      //index값을 넣어준다. (순서대로 i = 0 ; i < Column.size(); i++)
	    })
	    console.log(Columns);
	    //값을 기준으로 배열을 정렬한다. 

	    newColumns = Columns;
	    //클래스로 검사 후 desc인지 asc인지 검사. 
	    //desc인 경우 asc로 class명을 바꾸고 정렬해준다


	    if ($(this).attr('class') == "desc") {
	      $(this).addClass("asc");
	      $(this).removeClass("desc");
	      newColumns.sort(function(a, b) {
	        return desc(a[1], b[1]);
	      });
	    } else {
	      $(this).addClass("desc");
	      $(this).removeClass("asc");
	      newColumns.sort(function(a, b) {
	        return asc(a[1], b[1]);
	      });
	    }


	    //정렬한 배열의 index값

	    //newRows[i]에 Rows[newColumn[i][1]];
	    for (var i = 0; i < Rows.length; i++) {
	      newRows.push(Rows[newColumns[i][0]]);
	    }

	    //그 뒤에 tbody를 비우고 
	    $("sortTable tbody").empty();
	    //append로 newRows를 붙여준다

	    for (var i = 0; i < newRows.length; i++) {
	      $("#sortTable tbody").append(newRows);
	    }




	  });


	});

	function asc(a, b) {
	  if (!isNaN(a) && !isNaN(b)) return a - b;
	  var a = a.toString();
	  var b = b.toString();
	  return (a < b) ? -1 : (a == b) ? 0 : 1;
	}

	function desc(a, b) {
	  if (!isNaN(a) && !isNaN(b)) return b - a;
	  var a = a.toString();
	  var b = b.toString();
	  return (b < a) ? -1 : (b == a) ? 0 : 1;
	}
	
	