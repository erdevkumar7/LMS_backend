const db = require("../models/index.model");
const Site = db.Site;
const { default: axios } = require("axios");
// const zoom_access_token = `eyJzdiI6IjAwMDAwMSIsImFsZyI6IkhTNTEyIiwidiI6IjIuMCIsImtpZCI6ImI1YTI5YTM0LTNlMjYtNGU0MC1iYzYyLTRkOTk4NjJjMDQ5MiJ9.eyJ2ZXIiOjksImF1aWQiOiJmMTkxMTliZThiYTk0ODQ4Njk4MDQwM2M5ZDU3ODY5MCIsImNvZGUiOiI0bjlYNzYxNFVSWkY1aENJX2Z4UmRXM2llTDdqc0xFS2ciLCJpc3MiOiJ6bTpjaWQ6dnRIR3VNTU9TaXVoMGZwMUc3aTlxZyIsImdubyI6MCwidHlwZSI6MCwidGlkIjowLCJhdWQiOiJodHRwczovL29hdXRoLnpvb20udXMiLCJ1aWQiOiJ2OWlGRDJDYlNxR2xmNmpRbkJoNmRBIiwibmJmIjoxNjk4NDEwMTQ5LCJleHAiOjE2OTg0MTM3NDksImlhdCI6MTY5ODQxMDE0OSwiYWlkIjoiUVhmMHZGa0dSQ1NlYmNKZWJGZk9rZyJ9.7Isv0z_LtP3RHhsg4_Ipr14PZrhdOd5a4NJeeJdk2ZK4NPlwFxmysE6wi2QByotThve6wAqnNmrDmR5AEpEhJA`

exports.zoomAuthController = async (req, res) => {
    return res.redirect(encodeURI(`https://zoom.us/oauth/authorize?response_type=code&client_id=rkBVPQVKSUSSZ6vgbQVxQ&redirect_uri=http://localhost:6030/redirect`))
}

exports.zoomRedirectController = async (req, res) => {
    let data = JSON.stringify({
        code: req.query.code,
        grant_type: 'authorization_code',
        redirect_uri: 'http://localhost:6030/redirect'
    })

    let config = {
        method: 'POST',
        url: 'https://zoom.us/oauth/token',
        headers: {
            "Authorization": "Basic " + Buffer.from('rkBVPQVKSUSSZ6vgbQVxQ:9Q6lV0bF7omCISSDNoNlLF4TsHGZZfVc').toString('base64'),
            "Content-Type": "application/x-www-form-urlencoded"
        },
        data: data
    };

    const result = axios(config)
        .then((response) => {
            console.log(JSON.stringify(response.data))
        }).catch((err) => {
            console.log(err)
        })

    return res.json(result.data)

}

exports.zoomRefeshTokenController = async (req, res) => {
    const base64Data = Buffer.from('vtHGuMMOSiuh0fp1G7i9qg:lRDmYm7sCNq6Dmip3OqDed47n6gAfV5l').toString('base64')
   
    const refreshtoken = await axios({
        method: 'POST',
        url: 'https://zoom.us/oauth/token',
        headers: {
            "Authorization": "Basic " + base64Data,
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        data: {
            grant_type: 'refresh_token',
            refresh_token: 'eyJzdiI6IjAwMDAwMSIsImFsZyI6IkhTNTEyIiwidiI6IjIuMCIsImtpZCI6IjNhYzk0MGNlLThjMmYtNDMzZS1iNzBhLTEwZWJkM2E2YmFkNSJ9.eyJ2ZXIiOjksImF1aWQiOiJmMTkxMTliZThiYTk0ODQ4Njk4MDQwM2M5ZDU3ODY5MCIsImNvZGUiOiJJN3N4TGJveTRHZl9Sb2NiMlZhUzk2ZTFQTEY0aGk0TlEiLCJpc3MiOiJ6bTpjaWQ6dnRIR3VNTU9TaXVoMGZwMUc3aTlxZyIsImdubyI6MCwidHlwZSI6MSwidGlkIjowLCJhdWQiOiJodHRwczovL29hdXRoLnpvb20udXMiLCJ1aWQiOiJ2OWlGRDJDYlNxR2xmNmpRbkJoNmRBIiwibmJmIjoxNjk4NDEyOTI1LCJleHAiOjE3MDYxODg5MjUsImlhdCI6MTY5ODQxMjkyNSwiYWlkIjoiUVhmMHZGa0dSQ1NlYmNKZWJGZk9rZyJ9.q5dz1A85saIPhdMHKEvdXjHpcDkprgAdxo2Puj4UKiL0L8gpG0ISfthTWdBITH1-dqV_RlqQUW7SwA7IocHfiw'
        }
    })
    console.log(refreshtoken.data.access_token)
}

exports.zoomCreateMeetingController = async (req, res) => {
    try {
        const siteOtionsById = await Site.findAll({ where: { key: 'zoom_access_token' }});
        const base64Data = Buffer.from('vtHGuMMOSiuh0fp1G7i9qg:lRDmYm7sCNq6Dmip3OqDed47n6gAfV5l').toString('base64')
        const zoom_access_token = siteOtionsById[0].value

        const refreshtoken = await axios({
            method: 'POST',
            url: 'https://zoom.us/oauth/token',
            headers: {
                "Authorization": "Basic " + base64Data,
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            data: {
                grant_type: 'refresh_token',
                refresh_token: 'eyJzdiI6IjAwMDAwMSIsImFsZyI6IkhTNTEyIiwidiI6IjIuMCIsImtpZCI6IjNhYzk0MGNlLThjMmYtNDMzZS1iNzBhLTEwZWJkM2E2YmFkNSJ9.eyJ2ZXIiOjksImF1aWQiOiJmMTkxMTliZThiYTk0ODQ4Njk4MDQwM2M5ZDU3ODY5MCIsImNvZGUiOiJJN3N4TGJveTRHZl9Sb2NiMlZhUzk2ZTFQTEY0aGk0TlEiLCJpc3MiOiJ6bTpjaWQ6dnRIR3VNTU9TaXVoMGZwMUc3aTlxZyIsImdubyI6MCwidHlwZSI6MSwidGlkIjowLCJhdWQiOiJodHRwczovL29hdXRoLnpvb20udXMiLCJ1aWQiOiJ2OWlGRDJDYlNxR2xmNmpRbkJoNmRBIiwibmJmIjoxNjk4NDEyOTI1LCJleHAiOjE3MDYxODg5MjUsImlhdCI6MTY5ODQxMjkyNSwiYWlkIjoiUVhmMHZGa0dSQ1NlYmNKZWJGZk9rZyJ9.q5dz1A85saIPhdMHKEvdXjHpcDkprgAdxo2Puj4UKiL0L8gpG0ISfthTWdBITH1-dqV_RlqQUW7SwA7IocHfiw'
            }
        })


        const meetingdata = await axios({
            method: 'POST',
            url: 'https://api.zoom.us/v2/users/me/meetings',
            headers: {
                'Authorization': `Bearer` + refreshtoken.data.access_token,
                'Content-Type': 'application/json',
            },
            data: {
                topic: req.body.title,
                start_time: req.body.live_date,
            }
        });
        const zoomData = await meetingdata.data
        res.status(200).json(zoomData);

    } catch (error) {
        console.log(error)
    }

}

exports.zoomGetMeetingById = async (req, res) => {
    const meetingId = req.params.id
    const siteOtionsById = await Site.findAll({ where: { key: 'zoom_access_token' }});
    const zoom_access_token = siteOtionsById[0].value
    const base64Data = Buffer.from('vtHGuMMOSiuh0fp1G7i9qg:lRDmYm7sCNq6Dmip3OqDed47n6gAfV5l').toString('base64')
  
    
    try {
        const refreshtoken = await axios({
            method: 'POST',
            url: 'https://zoom.us/oauth/token',
            headers: {
                "Authorization": "Basic " + base64Data,
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            data: {
                grant_type: 'refresh_token',
                refresh_token: 'eyJzdiI6IjAwMDAwMSIsImFsZyI6IkhTNTEyIiwidiI6IjIuMCIsImtpZCI6IjNhYzk0MGNlLThjMmYtNDMzZS1iNzBhLTEwZWJkM2E2YmFkNSJ9.eyJ2ZXIiOjksImF1aWQiOiJmMTkxMTliZThiYTk0ODQ4Njk4MDQwM2M5ZDU3ODY5MCIsImNvZGUiOiJJN3N4TGJveTRHZl9Sb2NiMlZhUzk2ZTFQTEY0aGk0TlEiLCJpc3MiOiJ6bTpjaWQ6dnRIR3VNTU9TaXVoMGZwMUc3aTlxZyIsImdubyI6MCwidHlwZSI6MSwidGlkIjowLCJhdWQiOiJodHRwczovL29hdXRoLnpvb20udXMiLCJ1aWQiOiJ2OWlGRDJDYlNxR2xmNmpRbkJoNmRBIiwibmJmIjoxNjk4NDEyOTI1LCJleHAiOjE3MDYxODg5MjUsImlhdCI6MTY5ODQxMjkyNSwiYWlkIjoiUVhmMHZGa0dSQ1NlYmNKZWJGZk9rZyJ9.q5dz1A85saIPhdMHKEvdXjHpcDkprgAdxo2Puj4UKiL0L8gpG0ISfthTWdBITH1-dqV_RlqQUW7SwA7IocHfiw'
            }
        })

        const meetingdata = await axios({
            method: 'GET',
            url: `https://api.zoom.us/v2/meetings/${meetingId}`,
            headers: {
                'Authorization': `Bearer` + refreshtoken.data.access_token,
                'Content-Type': 'application/json',
            },
        });
        const zoomData = await meetingdata.data
        res.status(200).json(zoomData);

    } catch (error) {
        console.log(error)
    }

}