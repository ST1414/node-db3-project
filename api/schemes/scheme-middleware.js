const Scheme = require('./scheme-model');

/*
  If `scheme_id` does not exist in the database:

  status 404
  {
    "message": "scheme with scheme_id <actual id> not found"
  }
*/
const checkSchemeId = (req, res, next) => {
  
  Scheme.checkSchemeIdExists(req.params.scheme_id)
    .then( response => {
      if ( response ) {
        next();
      } else {
        res.status(404).json({ message: `scheme with scheme_id ${req.params.scheme_id} not found`})
      }
    })
    .catch( error => {
      res.status(500).json({ message: error.message})
    })
}




/*
  If `scheme_name` is missing, empty string or not a string:

  status 400
  {
    "message": "invalid scheme_name"
  }
*/
const validateScheme = (req, res, next) => {
  // if ( req.body.scheme_name === undefined || 
  //   req.body.scheme_name === '' || 
  //   typeof req.body.scheme_name !== 'string'){
  //     res.status(400).json({ message: `invalid scheme_name`})
  // } else {
  //   next();
  // }

  let isValid = true;
  // let isString = typeof req.body.scheme_name;
  // console.log('TYPE OF: ', isString);
  if ( req.body.scheme_name === undefined ) { isValid = false; }
  if ( req.body.scheme_name === '' ) { isValid = false; }
  if ( typeof req.body.scheme_name !== 'string' ) { isValid = false; }

  if (isValid){
    next();
  } else {
    res.status(400).json({ message: `invalid scheme_name`})
  }

}





/*
  If `instructions` is missing, empty string or not a string, or
  if `step_number` is not a number or is smaller than one:

  status 400
  {
    "message": "invalid step"
  }
*/
const validateStep = (req, res, next) => {
  
  let isValid = true;
  console.log('MIDDLE - instructions: ', req.body.instructions)
  console.log('MIDDLE - instructions type: ', typeof req.body.instructions)
  if (req.body.instructions === undefined){ isValid = false; }
  if (req.body.instructions === ''){ isValid = false; }
  if (typeof req.body.instructions !== 'string'){ isValid = false; }
  
  console.log('MIDDLE - step_number: ', req.body.step_number)
  console.log('MIDDLE - step_number type: ', typeof req.body.step_number)

  if (req.body.step_number < 1){ isValid = false; }
  if (typeof req.body.step_number !== 'number'){ isValid = false; }

  if (isValid){
    next();
  } else {
    res.status(400).json({ message: `invalid step`})
  }

}

module.exports = {
  checkSchemeId,
  validateScheme,
  validateStep,
}
