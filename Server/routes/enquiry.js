import { Router } from 'express';
import { submitEnquiry } from '../controllers/enquiryController.js';

const router = Router();

router.post('/enquiry', submitEnquiry);

export default router;
