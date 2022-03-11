const {prismaClient} = require('./prisma')

module.exports = {
  
  
  Query:{
    users: () => prismaClient.user.findMany(),
    user: async ( _ , {id})=> {
      const user = prismaClient.user.findUnique({
        where:{
          id
        }
      })


      return user

    },

    

    messages: async ()=> await prismaClient.message.findMany(),
    message: async ( _ , {id})=> await prismaClient.message.findFirst({
      where:{
        id
      }
    })
 
  },



  Mutation: {
    createUser:async ( _ , {name , description  }) => await prismaClient.user.create({
      data:{
        name,
        description
      }
    }),
    

    createMessage: async  ( _ , {authorId , text})=> await prismaClient.message.create({
      

      data:{
        authorId,
        text
      }
    })

    

    
  }
}