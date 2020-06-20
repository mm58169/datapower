console.info("Starting ISP POC Demo");

session.input.readAsBuffer( _ => {

      session.input.readAsJSON( _ => session.output.write(json_output) );

});

console.info("POC SOAP to JSON bridge complete...");
