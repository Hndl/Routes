//       Question   1 2 3 4
const MAX_ANSWER = [4,5,5,5] ;
const MAX_QUESTION = MAX_ANSWER.length;
const DELIM_Q_AND_A = ':';
const DELIM_PAIR = ',';
const NA = 'n/a';

const PERMUTATIONS = 
"1:3,2:3,3:1,4:3 1:3,2:3,3:1,4:4 1:3,2:3,3:1,4:1 1:3,2:3,3:3,4:1 1:2,2:3,3:1,4:4 1:3,2:3,3:3,4:3 1:3,2:3,3:4,4:3 1:3,2:3,3:4,4:4 1:3,2:3,3:4,4:1 1:3,2:3,3:3,4:4 1:1,2:3,3:4,4:3 1:1,2:3,3:4,4:4 1:1,2:3,3:4,4:1 1:1,2:3,3:3,4:4 1:2,2:3,3:4,4:3 1:2,2:3,3:4,4:4 1:2,2:3,3:4,4:1 1:2,2:3,3:3,4:4 1:3,2:2,3:4,4:1 1:3,2:2,3:1,4:3 1:3,2:2,3:1,4:4 1:3,2:2,3:1,4:1 1:3,2:2,3:3,4:3 1:3,2:2,3:3,4:1 1:1,2:2,3:4,4:1 1:2,2:2,3:4,4:1 1:2,2:2,3:1,4:4 1:3,2:2,3:4,4:3 1:3,2:2,3:4,4:4 1:3,2:2,3:3,4:4 1:1,2:2,3:4,4:3 1:1,2:2,3:4,4:4 1:1,2:2,3:3,4:4 1:2,2:2,3:4,4:3 1:2,2:2,3:4,4:4 1:2,2:2,3:3,4:4 1:3,2:1,3:1,4:3 1:3,2:1,3:1,4:4 1:3,2:1,3:1,4:1 1:3,2:1,3:3,4:1 1:2,2:1,3:1,4:4 1:3,2:1,3:3,4:3 1:3,2:1,3:4,4:3 1:3,2:1,3:4,4:4 1:3,2:1,3:4,4:1 1:3,2:1,3:3,4:4 1:1,2:1,3:4,4:3 1:1,2:1,3:4,4:4 1:1,2:1,3:4,4:1 1:1,2:1,3:3,4:4 1:2,2:1,3:4,4:3 1:2,2:1,3:4,4:4 1:2,2:1,3:4,4:1 1:2,2:1,3:3,4:4 1:3,2:3,3:2,4:3 1:3,2:3,3:2,4:4 1:3,2:3,3:2,4:1 1:2,2:3,3:2,4:4 1:3,2:2,3:2,4:3 1:3,2:2,3:2,4:4 1:3,2:2,3:2,4:1 1:2,2:2,3:2,4:4 1:3,2:1,3:2,4:3 1:3,2:1,3:2,4:4 1:3,2:1,3:2,4:1 1:2,2:1,3:2,4:4 1:3,2:3,3:5,4:3 1:3,2:3,3:5,4:4 1:3,2:3,3:5,4:1 1:1,2:3,3:5,4:3 1:1,2:3,3:5,4:4 1:1,2:3,3:5,4:1 1:2,2:3,3:5,4:3 1:2,2:3,3:5,4:4 1:2,2:3,3:5,4:1 1:3,2:2,3:5,4:1 1:1,2:2,3:5,4:1 1:2,2:2,3:5,4:1 1:3,2:2,3:5,4:3 1:3,2:2,3:5,4:4 1:1,2:2,3:5,4:3 1:1,2:2,3:5,4:4 1:2,2:2,3:5,4:3 1:2,2:2,3:5,4:4 1:3,2:1,3:5,4:3 1:3,2:1,3:5,4:4 1:3,2:1,3:5,4:1 1:1,2:1,3:5,4:3 1:1,2:1,3:5,4:4 1:1,2:1,3:5,4:1 1:2,2:1,3:5,4:3 1:2,2:1,3:5,4:4 1:2,2:1,3:5,4:1 1:3,2:3,3:1,4:5 1:2,2:3,3:1,4:5 1:3,2:3,3:4,4:5 1:3,2:3,3:3,4:5 1:1,2:3,3:4,4:5 1:1,2:3,3:3,4:5 1:2,2:3,3:4,4:5 1:2,2:3,3:3,4:5 1:3,2:2,3:1,4:5 1:2,2:2,3:1,4:5 1:3,2:2,3:4,4:5 1:3,2:2,3:3,4:5 1:1,2:2,3:4,4:5 1:1,2:2,3:3,4:5 1:2,2:2,3:4,4:5 1:2,2:2,3:3,4:5 1:3,2:1,3:1,4:5 1:2,2:1,3:1,4:5 1:3,2:1,3:4,4:5 1:3,2:1,3:3,4:5 1:1,2:1,3:4,4:5 1:1,2:1,3:3,4:5 1:2,2:1,3:4,4:5 1:2,2:1,3:3,4:5 1:3,2:3,3:2,4:5 1:2,2:3,3:2,4:5 1:3,2:2,3:2,4:5 1:2,2:2,3:2,4:5 1:3,2:1,3:2,4:5 1:2,2:1,3:2,4:5 1:3,2:3,3:5,4:5 1:1,2:3,3:5,4:5 1:2,2:3,3:5,4:5 1:3,2:2,3:5,4:5 1:1,2:2,3:5,4:5 1:2,2:2,3:5,4:5 1:3,2:1,3:5,4:5 1:1,2:1,3:5,4:5 1:2,2:1,3:5,4:5 1:3,2:3,3:1,4:2 1:3,2:3,3:3,4:2 1:3,2:3,3:4,4:2 1:1,2:3,3:4,4:2 1:2,2:3,3:4,4:2 1:3,2:2,3:4,4:2 1:3,2:2,3:1,4:2 1:3,2:2,3:3,4:2 1:1,2:2,3:4,4:2 1:2,2:2,3:4,4:2 1:3,2:1,3:1,4:2 1:3,2:1,3:3,4:2 1:3,2:1,3:4,4:2 1:1,2:1,3:4,4:2 1:2,2:1,3:4,4:2 1:3,2:3,3:2,4:2 1:3,2:2,3:2,4:2 1:3,2:1,3:2,4:2 1:3,2:3,3:5,4:2 1:1,2:3,3:5,4:2 1:2,2:3,3:5,4:2 1:3,2:2,3:5,4:2 1:1,2:2,3:5,4:2 1:2,2:2,3:5,4:2 1:3,2:1,3:5,4:2 1:1,2:1,3:5,4:2 1:2,2:1,3:5,4:2 1:1,2:3,3:1,4:3 1:1,2:3,3:1,4:4 1:1,2:3,3:1,4:1 1:1,2:3,3:3,4:1 1:2,2:3,3:1,4:3 1:2,2:3,3:1,4:1 1:2,2:3,3:3,4:1 1:1,2:3,3:3,4:3 1:2,2:3,3:3,4:3 1:1,2:2,3:1,4:3 1:1,2:2,3:1,4:4 1:1,2:2,3:1,4:1 1:1,2:2,3:3,4:3 1:1,2:2,3:3,4:1 1:2,2:2,3:1,4:3 1:2,2:2,3:1,4:1 1:2,2:2,3:3,4:3 1:2,2:2,3:3,4:1 1:1,2:1,3:1,4:3 1:1,2:1,3:1,4:4 1:1,2:1,3:1,4:1 1:1,2:1,3:3,4:1 1:2,2:1,3:1,4:3 1:2,2:1,3:1,4:1 1:2,2:1,3:3,4:1 1:1,2:1,3:3,4:3 1:2,2:1,3:3,4:3 1:1,2:3,3:2,4:3 1:1,2:3,3:2,4:4 1:1,2:3,3:2,4:1 1:2,2:3,3:2,4:3 1:2,2:3,3:2,4:1 1:1,2:2,3:2,4:3 1:1,2:2,3:2,4:4 1:1,2:2,3:2,4:1 1:2,2:2,3:2,4:3 1:2,2:2,3:2,4:1 1:1,2:1,3:2,4:3 1:1,2:1,3:2,4:4 1:1,2:1,3:2,4:1 1:2,2:1,3:2,4:3 1:2,2:1,3:2,4:1 1:1,2:3,3:1,4:5 1:1,2:2,3:1,4:5 1:1,2:1,3:1,4:5 1:1,2:3,3:2,4:5 1:1,2:2,3:2,4:5 1:1,2:1,3:2,4:5 1:1,2:3,3:1,4:2 1:1,2:3,3:3,4:2 1:2,2:3,3:1,4:2 1:2,2:3,3:3,4:2 1:1,2:2,3:1,4:2 1:1,2:2,3:3,4:2 1:2,2:2,3:1,4:2 1:2,2:2,3:3,4:2 1:1,2:1,3:1,4:2 1:1,2:1,3:3,4:2 1:2,2:1,3:1,4:2 1:2,2:1,3:3,4:2 1:1,2:3,3:2,4:2 1:2,2:3,3:2,4:2 1:1,2:2,3:2,4:2 1:2,2:2,3:2,4:2 1:1,2:1,3:2,4:2 1:2,2:1,3:2,4:2 1:4,2:1,3:1,4:1 1:4,2:1,3:1,4:2 1:4,2:1,3:1,4:3 1:4,2:1,3:1,4:4 1:4,2:1,3:1,4:5 1:4,2:1,3:2,4:1 1:4,2:1,3:2,4:2 1:4,2:1,3:2,4:3 1:4,2:1,3:2,4:4 1:4,2:1,3:2,4:5 1:4,2:1,3:3,4:1 1:4,2:1,3:3,4:2 1:4,2:1,3:3,4:3 1:4,2:1,3:3,4:4 1:4,2:1,3:3,4:5 1:4,2:1,3:4,4:1 1:4,2:1,3:4,4:2 1:4,2:1,3:4,4:3 1:4,2:1,3:4,4:4 1:4,2:1,3:4,4:5 1:4,2:1,3:5,4:1 1:4,2:1,3:5,4:2 1:4,2:1,3:5,4:3 1:4,2:1,3:5,4:4 1:4,2:1,3:5,4:5 1:4,2:2,3:1,4:1 1:4,2:2,3:1,4:2 1:4,2:2,3:1,4:3 1:4,2:2,3:1,4:4 1:4,2:2,3:1,4:5 1:4,2:2,3:2,4:1 1:4,2:2,3:2,4:2 1:4,2:2,3:2,4:3 1:4,2:2,3:2,4:4 1:4,2:2,3:2,4:5 1:4,2:2,3:3,4:1 1:4,2:2,3:3,4:2 1:4,2:2,3:3,4:3 1:4,2:2,3:3,4:4 1:4,2:2,3:3,4:5 1:4,2:2,3:4,4:1 1:4,2:2,3:4,4:2 1:4,2:2,3:4,4:3 1:4,2:2,3:4,4:4 1:4,2:2,3:4,4:5 1:4,2:2,3:5,4:1 1:4,2:2,3:5,4:2 1:4,2:2,3:5,4:3 1:4,2:2,3:5,4:4 1:4,2:2,3:5,4:5 1:4,2:3,3:1,4:1 1:4,2:3,3:1,4:2 1:4,2:3,3:1,4:3 1:4,2:3,3:1,4:4 1:4,2:3,3:1,4:5 1:4,2:3,3:2,4:1 1:4,2:3,3:2,4:2 1:4,2:3,3:2,4:3 1:4,2:3,3:2,4:4 1:4,2:3,3:2,4:5 1:4,2:3,3:3,4:1 1:4,2:3,3:3,4:2 1:4,2:3,3:3,4:3 1:4,2:3,3:3,4:4 1:4,2:3,3:3,4:5 1:4,2:3,3:4,4:1 1:4,2:3,3:4,4:2 1:4,2:3,3:4,4:3 1:4,2:3,3:4,4:4 1:4,2:3,3:4,4:5 1:4,2:3,3:5,4:1 1:4,2:3,3:5,4:2 1:4,2:3,3:5,4:3 1:4,2:3,3:5,4:4 1:4,2:3,3:5,4:5 1:4,2:4,3:1,4:1 1:4,2:4,3:1,4:2 1:4,2:4,3:1,4:3 1:4,2:4,3:1,4:4 1:4,2:4,3:1,4:5 1:4,2:4,3:2,4:1 1:4,2:4,3:2,4:2 1:4,2:4,3:2,4:3 1:4,2:4,3:2,4:4 1:4,2:4,3:2,4:5 1:4,2:4,3:3,4:1 1:4,2:4,3:3,4:2 1:4,2:4,3:3,4:3 1:4,2:4,3:3,4:4 1:4,2:4,3:3,4:5 1:4,2:4,3:4,4:1 1:4,2:4,3:4,4:2 1:4,2:4,3:4,4:3 1:4,2:4,3:4,4:4 1:4,2:4,3:4,4:5 1:4,2:4,3:5,4:1 1:4,2:4,3:5,4:2 1:4,2:4,3:5,4:3 1:4,2:4,3:5,4:4 1:4,2:4,3:5,4:5 1:4,2:5,3:1,4:1 1:4,2:5,3:1,4:2 1:4,2:5,3:1,4:3 1:4,2:5,3:1,4:4 1:4,2:5,3:1,4:5 1:4,2:5,3:2,4:1 1:4,2:5,3:2,4:2 1:4,2:5,3:2,4:3 1:4,2:5,3:2,4:4 1:4,2:5,3:2,4:5 1:4,2:5,3:3,4:1 1:4,2:5,3:3,4:2 1:4,2:5,3:3,4:3 1:4,2:5,3:3,4:4 1:4,2:5,3:3,4:5 1:4,2:5,3:4,4:1 1:4,2:5,3:4,4:2 1:4,2:5,3:4,4:3 1:4,2:5,3:4,4:4 1:4,2:5,3:4,4:5 1:4,2:5,3:5,4:1 1:4,2:5,3:5,4:2 1:4,2:5,3:5,4:3 1:4,2:5,3:5,1:4 1:4,2:5,3:5,4:5";

const VALIDATION_REPORT = {
  permutations : 0,
  guardrules : {
    rule_no1 : { count : 0,  breaches : []},
    rule_no2 : { count : 0,  breaches : []},
    rule_no3 : { count : 0,  breaches : []},
    rule_no4 : { count : 0,  breaches : []},
    rule_no6 : { count : 0,  breaches : []},
      
  }
}

var qa_renderPoints = null;
var journeyId = 0;
var allRoute = new Map();
var missingRoutes = null;
var iterator1 = null;
var currentMissing = null;


function toXY ( x,y, s, n) {
  return ( {
    x : x,
    y : y,
    size : s,
    type : name
  })
}

function setup() {
  createCanvas(800, 800);
  validate(PERMUTATIONS);
  qa_renderPoints= calculatePoints ( MAX_ANSWER);
   
  drawAllPossibleConnections(qa_renderPoints, MAX_ANSWER,0);
  journeyId = 0;
  missingRoutes = showMissingRoute(allRoute,PERMUTATIONS.split(' ') );
    iterator1 = missingRoutes.values();
  console.table(missingRoutes);
};

function showMissingRoute ( allPerms, usrPerms ){
  let up = new Map ();
  const notFoundRoutes = new Map();
  
  usrPerms.forEach( (qaT, i,arr) => {
    up.set(qaT,i)    
  });
  console.log(`up rec: ${up.size}`);
  console.log(`allPerms rec: ${allPerms.size}`);
  allPerms.forEach( (qaT, i, arr) => {
    if ( !up.has(qaT)  ) {
      notFoundRoutes.set(qaT,qaT);
      //console.log(`missing route : ${qaT}`);
    }
  });
  return notFoundRoutes;
}

function getXYByQAndA ( questionNo, answerNo ) {
  const func = 'getXYByQAndA';
  
  if (questionNo-1>MAX_ANSWER.length ||answerNo-1 > MAX_ANSWER[questionNo-1] ){
    console.log( `${func} - question ${questionNo} /answer ${answerNo} outofbounds... `);
    return null;
  }
  
  const key = makeQAKey(questionNo,answerNo );
  
  if ( qa_renderPoints.has(key) ) 
    return qa_renderPoints.get( key ) ;
  
  //console.log( `${func} - question ${questionNo} /answer ${answerNo} not found... `);
    
  return null;
}



function drawTupleConnections (  qaSet ) {
  
  qaPairs = qaSet.split(DELIM_PAIR);
  
  
  qaPairs.forEach ((pair,i, arr)=>{
  
    if ( i > 0){//skip first row
      const prev_qa = arr[i-1].split(DELIM_Q_AND_A);
      const curr_qa = pair.split(DELIM_Q_AND_A);
      
      let pointA = getXYByQAndA(prev_qa[0],prev_qa[1]);
      let pointB = getXYByQAndA(curr_qa[0],curr_qa[1]);
      drawLine(pointA, pointB);
    }     
  });
}

function drawAllPossibleConnections ( points, qaPair, level ) {
  let c = 0;
  
  //TODO - this needs a lot of work - it's specific to the current qa combo
  
  for ( let q1a = 0 ; q1a < 4 ; q1a++){
    
    for ( let q2a = 0 ; q2a < 5 ; q2a++){
      for ( let q3a = 0 ; q3a < 5 ; q3a++){
        for ( let q4a = 0 ; q4a < 5 ; q4a++){
          //console.log(`1:${q1a+1} -> 2:${q2a+1} -> 3:${q3a+1} -> 4:${q4a+1}`);
          c++;
          //TODO
          //strokeWeight(0.1)
          //stroke(51);
          //let pointA = getXYByQAndA(1,q1a+1);
          //let pointB = getXYByQAndA(2,q2a+1);
          //let pointC = getXYByQAndA(3,q3a+1);
          //let pointD = getXYByQAndA(4,q4a+1);
          //drawLine(pointA, pointB);
          //drawLine(pointB, pointC);
          //drawLine(pointC, pointD);
          let tuple = `1:${q1a+1},2:${q2a+1},3:${q3a+1},4:${q4a+1}`;
          allRoute.set(tuple,tuple);
         
          
        }
      }
    }
    
    
  }
  
  
  console.log('total:' + c);
  
}

function drawLine ( a,b ) {
   line(a.x,a.y,b.x,b.y);
}

function makeQAKey ( qNo, aNo ) {
  return (`${qNo}:${aNo}`);
}
function calculatePoints ( qaPair ) { 
  let points = new Map();
  const hSpacing = height/qaPair.length;
  const hOffSet = hSpacing/2;
  
  qaPair.forEach ( (qa,i,arr) => {
    const wSpacing = width/qa;
    const wOffSet = wSpacing/2;
    for ( let j = 0 ; j < qa ; j++ ) {
      const x = (j*wSpacing)+wOffSet;
      const y = (i*hSpacing)+hOffSet;
      const xy = toXY (x,y,10,`answer:Q${i+1}:A:${j+1}`) ;
      points.set(makeQAKey((i+1),(j+1)), xy);
    }
    
  });
 // console.table(points);
  return points;
}

function drawPoints ( points ) {
  
  points.forEach ( (p, i, arr) => {
    circle(p.x, p.y, p.size); 
  });
}

/*
 * Rule 
 *   1: each entry must have on space                   - done 
 *   2: no. of : = the no. of questions.                - done
 *   3: no. of n:m pairs must = number of questions -1  - done
 *   4: for each pair, the n must be > 0 && <= questions.
 *   5: for each pair, the m must be > 0 && <= answer for that question
 */
function validate (permutations) {
  const p = permutations.split(' ');
  
  VALIDATION_REPORT.permutations = p.length;
      
  const GUARDRAILS = VALIDATION_REPORT.guardrules;  
  for ( let i = 0 ; i < p.length ; i++) {
      
    //GUARDRAILS.rule_no1 = GUARDRAILS.rule_no1 + (validationRule1(p[i])===true ? 0 : 1)
    
    if ( !validationRule2(p[i]) ) { 
      GUARDRAILS.rule_no2.count = GUARDRAILS.rule_no2.count + 1;
      GUARDRAILS.rule_no2.breaches.push( toJSON_BreachElement(p[i],NA)); 
    }
    
    if (!validationRule3(p[i])) {
      GUARDRAILS.rule_no3.count = GUARDRAILS.rule_no3.count + 1;
      GUARDRAILS.rule_no3.breaches.push(toJSON_BreachElement(p[i],NA));  
    }
    
    const vgr4 = validationRule4_5(p[i]);
    
    if (vgr4.length > 0  ) {
      GUARDRAILS.rule_no4.count = GUARDRAILS.rule_no4.count + 1;
      GUARDRAILS.rule_no4.breaches.push(vgr4 );
    }
       
  }
  
  console.log(VALIDATION_REPORT);
}

function validationRule1 ( cfg ) {
  const regex_whitespace = /\s/;
  return cfg.match(regex_whitespace)===null;            
}
function validationRule2 ( cfg ) {  
  return validationRule_CharCount(cfg, DELIM_Q_AND_A, MAX_QUESTION);            
}
function validationRule3 ( cfg ) {  
  return validationRule_CharCount(cfg, DELIM_PAIR, MAX_QUESTION-1);            
}
function validationRule4_5 ( cfg ) {
  
  const pair = cfg.split(DELIM_PAIR);
  const breaches = [];
  
  for ( let i = 0 ; i < pair.length ; i++ ) {
  
    const q_and_a = pair[i].split(DELIM_Q_AND_A);
  
    if ( (q_and_a.length !== 2) ||
         (q_and_a[0] < 0 || q_and_a[0] > MAX_QUESTION) ||
         ( q_and_a[1] < 0 || q_and_a[1] > MAX_ANSWER[q_and_a[0]-1])
       ){
      
      breaches.push(toJSON_BreachElement(cfg, pair[i]));
    }
        
  
  }
  
  return breaches;
  
}


function validationRule_CharCount ( cfg, char, expectedCount ) {
  const CHAR = ':'  
  return cfg.split(char).length-1===expectedCount;            
}
function toJSON_BreachElement ( a, b) {
  return { permutation: a, pair : b }
}

function draw() {
  background(220);
  drawPoints(qa_renderPoints);
  
  
  if (frameCount%20 == 0){  
    journeyId++;
    currentMissing = iterator1.next().value;
    if ( currentMissing == undefined ) {
      iterator1 = missingRoutes.values();
      currentMissing = iterator1.next().value;
      journeyId=0
      
    }
  }
  if (currentMissing != null){
    textSize(32);
    text(`Journey ${currentMissing} -   ${journeyId}/${(missingRoutes.size)-1}` ,10, 30);
  drawTupleConnections(currentMissing);
  }
  //noLoop();
}
