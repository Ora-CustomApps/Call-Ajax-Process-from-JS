/*Create an Ajax process with name "EMP_DATA"
   a. Navigate to Processes
   b. Click on Ajax Callback
   c. Right click --> Create Process
AJAX PLSQL CODE*/
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
