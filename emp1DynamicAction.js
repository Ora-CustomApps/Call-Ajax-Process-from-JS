//Dynamic action Javascript code below
ajax.server.process("EMP_DATA" {  // Call Ajax process to execute plsql code and get the details of the selected empno.
    x01: $v('P1_EMPNO'), // x01 is a global variable check link to understand more on global variables. https://docs.oracle.com/cd/e59726_01/doc.50/e39149/apex_app.htm#aeapi29544
}, {
    datatype: 'text',
    success: function(pdata) { // success function. application process return value will be assigned to pdata
        $s('P1_DETAILS', pdata); //output of the ajax process(pdata) is assigned to "P1_DETAILS"
    }
})
