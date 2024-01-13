import express from "express";
import { Web5 } from '@web5/api';
import { webcrypto } from 'node:crypto';
import cookieParser from 'cookie-parser';

const app = express();
app.use(express.json());
app.use(cookieParser());
const port = 5000;

if (!globalThis.crypto) globalThis.crypto = webcrypto;
const { web5, did: aliceDid } = await Web5.connect();

async function getDid() {
    if (!globalThis.crypto) globalThis.crypto = webcrypto;
    const { web5, did: aliceDid } = await Web5.connect();
    // console.log(aliceDid);
    return {web5:web5,did:aliceDid};
}

app.get('/', async (req, res) => {
    try {
        const did = await getDid();
        console.log(did)
        res.cookie('did', did, { maxAge: 9000000, httpOnly: true });
        res.status(200).send('Succesfull');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error setting DID as cookie');
    }
});

app.get('/getDid', async (req, res) => {
    try {
        const didCookie = req.cookies.did;
        res.send(didCookie);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error getting DID cookie');
    }
});

app.post('/mintNft', async (req, res) => {
    try {
        console.log('hii')
        console.log(aliceDid)
        const nft = req.body;
        const didCookie = req.cookies.did;
        console.log(nft);
        const { record } = await web5.dwn.records.create({
            data: 'Hello Worldl',
            message: {
              recipient:aliceDid,
              dataFormat: 'text/plain',
            },
          });
        res.status(200).send('Successful');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error minting NFT');
    }
});

app.get('/getNft', async(req,res)=>{
    try{
        const response = await web5.dwn.records.query({
            from: aliceDid,
            message: {
              filter: {
                dataFormat: 'text/plain'
              }
            }
          });
          const len = response.records.length
          console.log(len);
        res.status(200).send(response)
    }
    catch (error) {
        console.error(error);
        res.status(500).send('Error in getting minted NFT');
    }
})

app.delete('/deltAllRecord', async(req,res)=>{
    try{
        const id=req.body.id;
        console.log(id)
        const response = await web5.dwn.records.delete({
            from: aliceDid,
            message: {
              recordId: id,
            },
          });
        res.status(200).send('Deleted records')

    }catch (error) {
        console.error(error);
        res.status(500).send('Not able to delete');
    }
})


app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});
