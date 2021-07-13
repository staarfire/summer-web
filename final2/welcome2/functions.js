
$('.top-text').marquee({
	//duration in milliseconds of the marquee
	duration: 15000,
	//gap in pixels between the tickers
	gap: 5,
	//time in milliseconds before the marquee will start animating
	delayBeforeStart: 2000,
	//'left' or 'right'
	direction: 'left',
	//true or false - should the marquee be duplicated to show an effect of continues flow
	duplicated: true,
  pauseOnHover: false,
  startVisible: true,
});

$('.bottom-text').marquee({
	//duration in milliseconds of the marquee
	duration: 15000,
	//gap in pixels between the tickers
	gap: 0,
	//time in milliseconds before the marquee will start animating
	delayBeforeStart: 2000,
	//'left' or 'right'
	direction: 'right',
	//true or false - should the marquee be duplicated to show an effect of continues flow
	duplicated: true,
  pauseOnHover: false,
  startVisible: true,
});
