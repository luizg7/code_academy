let athleteFinalPosition = 'first place';

switch (athleteFinalPosition) {
  case 'first place' :
    console.log('You get the gold medal!');
    break;
  case 'second place' :
    console.log('You get the silver medal!');
    break;
  case 'third place' :
    console.log('You get the bronze medal!');
    break;
    default :
    console.log('No medal awarded.')
    break;
}

/* switch statement syntax

switch (conditional) {
	case 01:
  	code block;
    break;
  case 02:
  	code block;
    break;
    default:
  default:
  	code block;
    break;
}
