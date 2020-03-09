import React, {useState} from 'react'

export default () => {
    const [fName, setfName] = useState('');
    const [lName, setlName] = useState('');
    const [poch, setPoch] = useState('');
    const [email, setEmail] = useState('');
    const [stats, setStats] = useState({});
    
    var data = new Blob([JSON.stringify({
        name: fName,
        nazw: lName,
        poch: poch,
        zawod: email,
        stats: stats

    })], {type: 'application/json'});
    console.log(JSON.parsedata)
    var url = window.URL.createObjectURL(data);
    
   

function onChange(event) {
    var reader = new FileReader();
    reader.onload = onReaderLoad;
    reader.readAsText(event.target.files[0]);
}

function onReaderLoad(event){
    console.log(event.target.result);
    var obj = JSON.parse(event.target.result);
    setStats(obj.stats)
    setfName(obj.name)
    setlName(obj.nazw)
    setEmail(obj.zawod)
    setPoch(obj.poch)
}




const classNumber = "w3-col m1 w3-center"
const classTwo = "w3-col s3 w3-center"

return(
    <>
    <div className="w3-row-padding">
    <div className="w3-quarter">
    <label>Imię</label>
    <input className="w3-input w3-border" type="text" id="Imię" value={fName} onChange={e => setfName(e.target.value)} />
    </div>
    <div className="w3-quarter">
    <label>Nazwisko</label>
    <input className="w3-input w3-border" type="text" id="Nazwisko" value={lName} onChange={e => setlName(e.target.value)} />
    </div>
    <div className="w3-quarter">
    <label>Pochodzenie</label>
    <input className="w3-input w3-border" type="text" id="Pochodzenie"value={poch}  onChange={e => setPoch(e.target.value)} />
    </div>
    <div className="w3-quarter">
    <label>Zawód</label>
    <input className="w3-input w3-border" type="text" id="Zawód" value={email} onChange={e => setEmail(e.target.value)} />
    </div>
   
    </div>
    <div>
    <div class="w3-row">
  
  
    
    <div className={classNumber} >
    <label>Siła</label>
    
    <input  className={classTwo} type="number" id="S" value={stats.s} onChange={e => setStats({
        ...stats,
        s: e.target.value})} />
    </div>
    <div className={classNumber} >
    <label>Zręczność</label>
    <input className={classTwo} type="number" id="Zr" value={stats.zr} onChange={e => setStats({
        ...stats,
        zr: e.target.value})} />
    </div>
    
    <div className={classNumber} > 
    <label>Inteligencja</label>                
    <input className={classTwo} type="number" id="In" value={stats.in} onChange={e => setStats({
        ...stats,
        in: e.target.value})} />
    </div>
    <div className={classNumber} >
    <label>Budowa</label>
    <input className={classTwo} type="number" id="Bu" value={stats.bu} onChange={e => setStats({
        ...stats,
        bu: e.target.value})} />
    </div>
    <div className={classNumber} >
    <label>Wytrzymałość</label>
    <input className={classTwo} type="number" id="Wt" value={stats.wt} onChange={e => setStats({
        ...stats,
        wt: e.target.value})} />
    </div>
    <div className={classNumber} >
    <label>Percepcja</label>
    <input className={classTwo} type="number" id="Pr" value={stats.pr} onChange={e => setStats({
        ...stats,
        pr: e.target.value})} />
    </div>
    <div className={classNumber} >
    <label>Szczęście</label>
    <input className={classTwo} type="number" id="Sz" value={stats.sz} onChange={e => setStats({
        ...stats,
        sz: e.target.value})} />
    </div>
    <div className={classNumber} >
    <label>Charyzma</label>
    <input className={classTwo} type="number" id="Ch" value={stats.ch} onChange={e => setStats({
        ...stats,
        ch: e.target.value})} />
    </div>
    </div>
    </div>
    <a id="download_link" download="my_exported_file.json" href={url} >Download as Text File</a>
    <input onChange={e=>onChange(e)} type="file" />


    </>
    )
}