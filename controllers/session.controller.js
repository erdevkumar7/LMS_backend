const db = require('../models/index.model')
require('dotenv').config()
const jsonwebtoken = require('jsonwebtoken')
const { sequelize } = require('sequelize')
const Session = db.Session

exports.getSessions = async (req, res) => {
    const Sequelize = require('sequelize');
    const Op = Sequelize.Op;
    const search = req.params.search;
    const {
        course_id,
        module_id,
        status
    } = req.body
    try {
        if (search) {
            const sessionSerached = await Session.findAll({
                where: {
                    title: {
                        [Op.like]: `%${search}%`
                    },
                    is_deleted: false
                },
                include: [{
                    model: db.Course,

                },
                {
                    model: db.Module,

                },
                ],
            })
            res.status(200).json(sessionSerached)
        }
        else if (course_id && module_id && status) {
            const sessions = await Session.findAll({
                where: {
                    is_deleted: false,
                    course_id,
                    module_id,
                    status,
                },
                include: [{
                    model: db.Course,
                },
                {
                    model: db.Module,
                },
                ],
            });
            res.status(200).json(sessions);
        }
        else if (course_id == 0 && module_id && status) {
            const sessions = await Session.findAll({
                where: {
                    is_deleted: false,
                    module_id,
                    status,
                },
                include: [{
                    model: db.Course,
                },
                {
                    model: db.Module,
                },
                ],
            });
            res.status(200).json(sessions);
        }
        else if (course_id == 0 && module_id && status === 0) {
            const sessions = await Session.findAll({
                where: {
                    is_deleted: false,
                    module_id,
                },
                include: [{
                    model: db.Course,
                },
                {
                    model: db.Module,
                },
                ],
            });
            res.status(200).json(sessions);
        }
        else if (course_id == 0 && module_id == 0 && status) {
            const sessions = await Session.findAll({
                where: {
                    is_deleted: false,
                    status,
                },
                include: [{
                    model: db.Course,
                },
                {
                    model: db.Module,
                },
                ],
            });
            res.status(200).json(sessions);
        }
        else if (course_id == 0 && module_id == 0 && status == 0) {
            const sessions = await Session.findAll({
                where: {
                    is_deleted: false,
                },
                include: [{
                    model: db.Course,
                },
                {
                    model: db.Module,
                },
                ],
            });
            res.status(200).json(sessions);
        }
        else if (course_id && module_id == 0 && status) {
            const sessions = await Session.findAll({
                where: {
                    is_deleted: false,
                    course_id,
                    status,
                },
                include: [{
                    model: db.Course,
                },
                {
                    model: db.Module,
                },
                ],
            });
            res.status(200).json(sessions);
        }
        else if (course_id && module_id == 0 && status == 0) {
            const sessions = await Session.findAll({
                where: {
                    is_deleted: false,
                    course_id,

                },
                include: [{
                    model: db.Course,
                },
                {
                    model: db.Module,
                },
                ],
            });
            res.status(200).json(sessions);
        }
        else if (course_id && module_id && status == 0) {
            const sessions = await Session.findAll({
                where: {
                    is_deleted: false,
                    course_id,
                    module_id,

                },
                include: [{
                    model: db.Course,
                },
                {
                    model: db.Module,
                },
                ],
            });
            res.status(200).json(sessions);
        }
        else {
            const sessions = await Session.findAll({
                where: {
                    is_deleted: false,

                },
                include: [{
                    model: db.Course,

                },
                {
                    model: db.Module,

                },
                ],
            });
            res.status(200).json(sessions);
        }
    } catch (e) {
        res.status(400).json(e);
    }

}

exports.getLiveSessions = async (req, res) => {
    // console.log('sessionnnnn')
    // res.send('livesessions')
    const Sequelize = require('sequelize');
    const Op = Sequelize.Op;
    const search = req.params.search;
    const {
        course_id,
        module_id,
        status
    } = req.body
    try {
        if (search) {
            const sessionSerached = await Session.findAll({
                where: {
                    title: {
                        [Op.like]: `%${search}%`
                    },
                    is_deleted: false
                },
                include: [{
                    model: db.Course,

                },
                {
                    model: db.Module,

                },
                ],
            })
            res.status(200).json(sessionSerached)
        }
        else if (course_id && module_id && status) {
            const sessions = await Session.findAll({
                where: {
                    is_deleted: false,
                    course_id,
                    module_id,
                    status,
                },
                include: [{
                    model: db.Course,
                },
                {
                    model: db.Module,
                },
                ],
            });
            res.status(200).json(sessions);
        }
        else if (course_id == 0 && module_id && status) {
            const sessions = await Session.findAll({
                where: {
                    is_deleted: false,
                    module_id,
                    status,
                },
                include: [{
                    model: db.Course,
                },
                {
                    model: db.Module,
                },
                ],
            });
            res.status(200).json(sessions);
        }
        else if (course_id == 0 && module_id && status === 0) {
            const sessions = await Session.findAll({
                where: {
                    is_deleted: false,
                    module_id,
                },
                include: [{
                    model: db.Course,
                },
                {
                    model: db.Module,
                },
                ],
            });
            res.status(200).json(sessions);
        }
        else if (course_id == 0 && module_id == 0 && status) {
            const sessions = await Session.findAll({
                where: {
                    is_deleted: false,
                    status,
                },
                include: [{
                    model: db.Course,
                },
                {
                    model: db.Module,
                },
                ],
            });
            res.status(200).json(sessions);
        }
        else if (course_id == 0 && module_id == 0 && status == 0) {
            const sessions = await Session.findAll({
                where: {
                    is_deleted: false,
                },
                include: [{
                    model: db.Course,
                },
                {
                    model: db.Module,
                },
                ],
            });
            res.status(200).json(sessions);
        }
        else if (course_id && module_id == 0 && status) {
            const sessions = await Session.findAll({
                where: {
                    is_deleted: false,
                    course_id,
                    status,
                },
                include: [{
                    model: db.Course,
                },
                {
                    model: db.Module,
                },
                ],
            });
            res.status(200).json(sessions);
        }
        else if (course_id && module_id == 0 && status == 0) {
            const sessions = await Session.findAll({
                where: {
                    is_deleted: false,
                    course_id,

                },
                include: [{
                    model: db.Course,
                },
                {
                    model: db.Module,
                },
                ],
            });
            res.status(200).json(sessions);
        }
        else if (course_id && module_id && status == 0) {
            const sessions = await Session.findAll({
                where: {
                    is_deleted: false,
                    course_id,
                    module_id,

                },
                include: [{
                    model: db.Course,
                },
                {
                    model: db.Module,
                },
                ],
            });
            res.status(200).json(sessions);
        }
        else {
         
            // const currentDate1 = new Date();
            // const formattedDate = currentDate1.toISOString()

            const currentDate = new Date(); // Get the current date and time
            const year = currentDate.getFullYear(); // Get the year
            const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Get the month (zero-based)
            const day = String(currentDate.getDate()).padStart(2, '0'); // Get the day
            const hours = String(currentDate.getHours()).padStart(2, '0'); // Get the hours
            const minutes = String(currentDate.getMinutes()).padStart(2, '0'); // Get the minutes
            const seconds = String(currentDate.getSeconds()).padStart(2, '0'); // Get the seconds

            const formattedCurrentDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

            const sessions = await Session.findAll({
                where: {
                    is_deleted: false,
                    is_live_session: true,
                    live_end_date: {
                        [Op.gte]: formattedCurrentDate,
                    },
                },
                include: [{
                    model: db.Course,
                },
                {
                    model: db.Module,
                },
                ],
            });


            res.status(200).json(sessions);
        }
    } catch (e) {
        res.status(400).json(e);
    }

}


exports.getSessionById = async (req, res) => {
    // res.send("all session");
    const sessionId = req.params.id;
    try {
        const sessionById = await Session.findOne({
            where: { id: sessionId, is_deleted: false },
            include: [{
                model: db.Course,

            },
            {
                model: db.Module,
            },
            ],
        });

        if (sessionById) {
            res.status(200).json(sessionById);
        }
        if (!sessionById) {
            res.status(404).json("Session not Found!");
        }
    } catch (e) {
        res.status(400).json(e);
    }
}


exports.createSession = async (req, res) => {
    const {
        title,
        description,
        course_id,
        module_id,
        type,
        status,
        is_live_session,
        live_date,
        live_end_date,
        stream_token,
        room_id,
    } = req.body

    const token = req.headers.logintoken
    const decode = jsonwebtoken.verify(token, process.env.SIGNING_KEY)
    const user_id = decode.id

    let attachment;
    if (req.file) {
        attachment = req.file.path;
    }

    try {
        const sessionCreated = await Session.create({
            title,
            description,
            course_id,
            module_id,
            user_id: user_id,
            status,
            type,
            created_by: user_id,
            attachment,
            is_live_session,
            live_date,
            live_end_date,
            stream_token,
            room_id,
        })
        res.status(201).send(sessionCreated)
    }
    catch (e) {
        res.status(400).send(e)
    }

}

exports.updateSession = async (req, res) => {
    const {
        title,
        description,
        course_id,
        type,
        status,
        module_id,
        is_live_session,
        live_date,
        live_end_date,
        stream_token,
        room_id,
    } = req.body

    const sessionId = req.params.id

    const token = req.headers.logintoken
    const decode = jsonwebtoken.verify(token, process.env.SIGNING_KEY)
    const user_id = decode.id

    let attachment;
    if (req.file) {
        attachment = req.file.path;
    }

    try {
        const sessionUpdate = await Session.update({
            title,
            description,
            module_id,
            course_id,
            user_id: user_id,
            type,
            status,
            attachment,
            is_live_session,
            live_date,
            live_end_date,
            stream_token,
            room_id,
            updated_by: user_id,
        }, { where: { id: sessionId } })

        const updatedSession = await Session.findOne({ where: { id: sessionId } })
        res.status(201).send(updatedSession)
    }
    catch (e) {
        res.status(400).send(e)
    }
}


exports.deleteSession = async (req, res) => {
    const sessionId = req.params.id

    const token = req.headers.logintoken
    const decode = jsonwebtoken.verify(token, process.env.SIGNING_KEY)
    const deleted_by = decode.id
    try {
        const findSession = await Session.findOne({ where: { id: sessionId } })
        if (findSession) {
            const isDeleted = await Session.update({ is_deleted: true, deleted_by: deleted_by }, { where: { id: sessionId } })
            const sessionDeleted = await Session.findOne({ where: { id: sessionId } })
            res.status(201).send(sessionDeleted)
        }

        if (!findSession) {
            res.status(404).json('No session awailable!')
        }
    }
    catch (e) {
        res.status(400).json(e)
    }

}



