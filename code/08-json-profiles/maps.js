/*******************************************************
 * task service implementation
 * mapping document (server)
 * Mike Amundsen (@mamund)
 *******************************************************/

// hold mapping rules for interface v. stored data

// key = internal name
// value = interface name 
function storeMap() {
  var todo, rtn;
  rtn = {};
  
  todo = {};
  todo.id = "id";
  todo.completeFlag = "completed";
  todo.title = "title";
  todo.email = "email";
  todo.tags = "tags";
  rtn.todo = todo;
  
  return rtn;
}

// run once at the start
var map = storeMap();

module.exports = main;
function main(object, property, action) {
  var rtn = "";

  switch (action) {
    case "ex2in":
      rtn = ex2in(object, property);
      break;
    case "in2ex":
      rtn = in2ex(object, property);
      break;
  }
  return rtn;  
}

// convert interface name 
// to internal name
function ex2in(object, property) {
  var rtn;
  
  if(map[object]) {
    for(p in map[object]) {
      if(map[object][p]===property) {
        rtn = p;
        break;
      }
    }
  }
  return rtn;
}

// convert internal name 
// to interface name
function in2ex(object, property) {
  var rtn;
  
  if(map[object]) {
    for(p in map[object]) {
      if(p===property) {
        rtn = map[object][property];
        break;
      }
    }
  } 
  return rtn;
}


