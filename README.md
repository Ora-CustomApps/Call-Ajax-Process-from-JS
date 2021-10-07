# Calling Ajax process from Javascript code in dynamic action


Steps :
1. Create a form region in Apex with items (P1_EMPNO,P1_DETAILS)
2. Emp No is a select list (Query : select empno,ename from the emp)
3. Create an Ajax process with name "EMP_DATA"
   a. Navigate to Processes
   b. Click on Ajax Callback
   c. Right click --> Create Process
AJAX PLSQL CODE
DECLARE
    vname emp%ROWTYPE;
BEGIN
    SELECT *
    INTO   vname
    FROM   emp1
    WHERE  empno = apex_application.g_x01;

    htp.Prn(vname.empno
            ||vname.empname
            ||vname.empsalary);
END;    
4. Create a Dynamic action in the On Change event of P1_EMPNO
5. Dynamic action Javascript code below
ajax.server.process("EMP_DATA" {  // Call Ajax process to execute plsql code and get the details of the selected empno.
    x01: $v('P1_EMPNO'), // x01 is a global variable check link to understand more on global variables. https://docs.oracle.com/cd/e59726_01/doc.50/e39149/apex_app.htm#aeapi29544
}, {
    datatype: 'text',
    success: function(pdata) { // success function. application process return value will be assigned to pdata
        $s('P1_DETAILS', pdata); //output of the ajax process(pdata) is assigned to "P1_DETAILS"
    }
})
