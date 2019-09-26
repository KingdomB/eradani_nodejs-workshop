function testTimeout() {

    console.log('Begin');
  
    setTimeout(function() {
      console.log('Done!');
    }, 2000);
  
    console.log('Waiting..');
  }