'use strict'

const { v4 } = require('uuid')

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('rules')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('rules').insert([
        {
          id: v4(),
          name: 'ruleSample1',
          description: 'description rule',
          conditions: {
            all: [
              {
                all: [
                  {
                    fact: 'price',
                    operator: 'lessThanXPercentThanCompetitor',
                    value: '5',
                  },
                  {
                    fact: 'competitorStock',
                    operator: 'notEqualToXStock',
                    value: '0',
                  },
                ],
              },
            ],
          },
          event: {
            type: 'event',
            params: {
              action: 'increase',
              message:
                'Ups !! estas al menos un 5% bajo la competencia, estas seguro de este precio ?  ;)',
            },
          },
          created_at: new Date(),
          is_active: true,
        },
        {
          id: v4(),
          name: 'ruleSample2',
          description: 'description rule',
          conditions: {
            all: [
              {
                all: [
                  {
                    fact: 'price',
                    operator: 'greaterThanXPercentThanCompetitor',
                    value: '5',
                  },
                  {
                    fact: 'competitorStock',
                    operator: 'notEqualToXStock',
                    value: '0',
                  },
                ],
              },
            ],
          },
          event: {
            type: 'event',
            params: {
              action: 'decrease',
              message:
                'Cuidado !! baja un poquito tu precio, estas sobre el 5% que tu competencia',
            },
          },
          created_at: new Date(),
          is_active: true,
        },
        {
          id: v4(),
          name: 'ruleSample3',
          description: 'description rule',
          conditions: {
            all: [
              {
                all: [
                  {
                    fact: 'price',
                    operator: 'betweenXPercentThanCompetitor',
                    value: '5',
                  },
                  {
                    fact: 'competitorStock',
                    operator: 'notEqualToXStock',
                    value: '0',
                  },
                ],
              },
            ],
          },
          event: {
            type: 'event',
            params: {
              action: 'keep',
              message:
                'Excelente !! tu precio esta en un rango de 5% en comparacion a tu competencia, <3 !!',
            },
          },
          created_at: new Date(),
          is_active: true,
        },
        {
          id: v4(),
          name: 'ruleSample4',
          description: 'description rule',
          conditions: {
            all: [
              {
                all: [
                  {
                    fact: 'price',
                    operator: 'equalToXPrice',
                    value: 'competitorPrice',
                  },
                  {
                    fact: 'competitorStock',
                    operator: 'notEqualToXStock',
                    value: '0',
                  },
                ],
              },
            ],
          },
          event: {
            type: 'event',
            params: {
              action: 'keep',
              message:
                'Ojo !! tu precio es el mismo que la competencia, si bajas un poco el precio seras un champion !!',
            },
          },
          created_at: new Date(),
          is_active: true,
        },
        {
          id: v4(),
          name: 'ruleSample5',
          description: 'description rule',
          conditions: {
            all: [
              {
                all: [
                  {
                    fact: 'competitorStock',
                    operator: 'equalToXStock',
                    value: '0',
                  },
                ],
              },
            ],
          },
          event: {
            type: 'event',
            params: {
              action: 'increase',
              message:
                'Es tu oportunidad !! la competencia no tiene stock, puedes subir tu precio y obtener un buen margen',
            },
          },
          created_at: new Date(),
          is_active: true,
        },
      ])
    })
}
