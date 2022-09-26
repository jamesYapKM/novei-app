export function processDDL(ddl, value, label, tran = null) {
    if (
      ddl[0] &&
      typeof ddl[0][value] !== "undefined" &&
      ddl[0][label] !== "undefined"
    ) {
      return ddl.map(function(item) {
        if (item[label]) {
          if (tran && tran.t) {
            item.text = tran.t(item[label]);
          } else {
            item.text = item[label];
          }
        } else {
          item.text = "";
        }
        if (value == "ALL") {
          item.value = JSON.stringify(item);
        } else if (item[value]) {
          item.value = item[value];
        }
        return item;
      });
    }
    return ddl;
  }