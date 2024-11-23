import {Handler} from 'express'
import { prisma } from '../prisma.client'
import { createSchemaCampaign } from '../schema/createCampaignSchema'



export class CampaignsController  {
 index : Handler = async (req,res,next)=>{
   try{
    const campaigns = await prisma.campaign.findMany()
    res.status(201).json(campaigns)
   }catch(error){
    next(error)
   }
 }
 create: Handler = async(req,res,next)=>{
   try{
    const body = createSchemaCampaign.parse(req.body)
    const newCampaign = await prisma.campaign.create({
      data: {
        name : "Campaign example",
        description : "campaign description",
        startDate: new Date("2024/10/22")
      }
    })

    res.status(200).json(newCampaign)
   }catch(error){
    next(error)
   }
 }
 show: Handler = async(req,res,next)=>{
  try{
    const campaign = await prisma.campaign.findUnique({
            where: { id: Number(req.params.id) },
            include:{
              leads: true
            }
        
      })
  }catch(error){
    next(error)
  }
 }
}
