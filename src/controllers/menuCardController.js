import MenuCard from "../models/MenuCard.js";
import cloudinary from "../config/cloudinary.js";

export const getMenuCards = async (req, res, next) => {
    try {
        const menuCards = await MenuCard.find().sort({ createdAt: -1 });
        res.json(menuCards);
    } catch (error) {
        next(error);
    }
};

export const createMenuCard = async (req, res, next) => {
    try {
        let imageUrl = req.body.image;

        if (req.file) {
            const b64 = Buffer.from(req.file.buffer).toString("base64");
            const dataURI = "data:" + req.file.mimetype + ";base64," + b64;
            const result = await cloudinary.uploader.upload(dataURI, {
                resource_type: "auto",
                folder: "menu-cards",
            });
            imageUrl = result.secure_url;
        }

        const { title, description, isActive } = req.body;
        const menuCard = await MenuCard.create({
            title,
            image: imageUrl,
            description,
            isActive: isActive === 'true' || isActive === true
        });
        res.status(201).json(menuCard);
    } catch (error) {
        next(error);
    }
};

export const updateMenuCard = async (req, res, next) => {
    try {
        const menuCard = await MenuCard.findById(req.params.id);
        if (!menuCard) return res.status(404).json({ message: "Menu card not found." });

        if (req.file) {
            const b64 = Buffer.from(req.file.buffer).toString("base64");
            const dataURI = "data:" + req.file.mimetype + ";base64," + b64;
            const result = await cloudinary.uploader.upload(dataURI, {
                resource_type: "auto",
                folder: "menu-cards",
            });
            req.body.image = result.secure_url;
        }

        if (req.body.isActive !== undefined) {
            req.body.isActive = req.body.isActive === 'true' || req.body.isActive === true;
        }

        Object.assign(menuCard, req.body);
        const updated = await menuCard.save();
        res.json(updated);
    } catch (error) {
        next(error);
    }
};

export const deleteMenuCard = async (req, res, next) => {
    try {
        const menuCard = await MenuCard.findById(req.params.id);
        if (!menuCard) return res.status(404).json({ message: "Menu card not found." });

        await menuCard.deleteOne();
        res.json({ message: "Menu card deleted successfully." });
    } catch (error) {
        next(error);
    }
};
