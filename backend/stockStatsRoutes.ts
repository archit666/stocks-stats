import express, { Request, Response } from 'express';
import axios from 'axios';
import * as cheerio from 'cheerio';

const router = express.Router();

router.get('/:name', async (req: Request, res: Response): Promise<void> => {
    try {
        const { name } = req.params;
        const url = `https://www.screener.in/company/${name}`;
        const { data } = await axios.get(url);
        const $ = cheerio.load(data);
        const pros: Array<string> = [];
        const cons: Array<string> = [];
        const ratios: { [key: string]: string } = {};
        const companyName = $('#top h1').text();
        const currentValue = $('#top .font-size-18.strong span:first-child').text().trim();

        $('#top-ratios li').each((_, element) => {
            const name = $(element).find('.name').text().trim().replace(/\s+/g, ' ');
            const value = $(element).find('.value').text().replace(/\s+/g, ' ').trim();
            const cleanKey = name.toLowerCase().replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, '_');
            ratios[cleanKey] = value;
        });
        // Extract Pros
        $('#analysis .pros ul li').each((i, el) => {
            pros.push($(el).text().trim());
        });

        // Extract Cons
        $('#analysis .cons ul li').each((i, el) => {
            cons.push($(el).text().trim());
        });

        res.json({
            success: true,
            details: {
                companyName,
                currentValue,
                ratios,
                pros,
                cons
            }
        });

    } catch (err: any) {
        console.log('Error has occured: ', err);
        if (err.response && err.response.status === 404) {
            res.status(404).json({
                success: false,
                error: `Stock ${req.params.name} not found`
            });
            res.status(500).json({
                success: false,
                error: 'Issue on the server side. Please try later'
            });
        }
    }
});

export default router;