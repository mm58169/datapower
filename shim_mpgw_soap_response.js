
session.input.readAsBuffer( (error, bufferObject) => {

  session.input.readAsJSON( (error, jsonResponse) => {

    let soap = `<?xml version = "1.0"?>
    <SOAP-ENV:Envelope
      xmlns:SOAP-ENV = "http://www.w3.org/2001/12/soap-envelope"
      SOAP-ENV:encodingStyle = " http://www.w3.org/2001/12/soap-encoding">
    <cmsl:getContentByIDResponse xmlns:cmsl='http://www.massmutual.com/cmsl'>
      <cmsl:ResponseContentItem cmsl:id='${jsonResponse.objectId}' cmsl:contentTypeID='${jsonResponse.contentTypeID}' cmsl:contentTypeName='${jsonResponse.contentTypeName}'>
        <cmsl:ContentMap>
    <!-- from 0 to unbounded -->
          <cmsl:Entry>
            <Key>siteName</Key>
            <Value>${jsonResponse.siteName}</Value>
          </cmsl:Entry>`;

    for(let entry of jsonResponse.displayAttributes) {
      soap += `<cmsl:Entry>
                <Key>${entry.name}</Key>
                <Value>${entry.value}</Value>
              </cmsl:Entry>`;
    }

    soap += `</cmsl:ContentMap>
        <cmsl:ChannelMap>
    <!-- from 0 to unbounded
          <cmsl:Tier cmsl:sortOrder='?999?' cmsl:channelID='?XXX?' cmsl:channelName='?XXX?' /> -->
        </cmsl:ChannelMap>
        <cmsl:Rules>
    <!-- from 0 to unbounded
          <cmsl:Rule cmsl:value='?XXX?' /> -->
        </cmsl:Rules>
      </cmsl:ResponseContentItem>
    </cmsl:getContentByIDResponse>
  </SOAP-ENV:Envelope>`;

    session.output.write(soap);

  });

});
