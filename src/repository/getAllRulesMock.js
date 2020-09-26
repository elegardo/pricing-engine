'use strict'

export const getAllRulesMock = () => {
  const rules = [
    {
      id: 1,
      name: 'ruleSample1',
      description: 'description rule',
      conditions: {
        all: [
          {
            all: [
              {
                fact: 'price',
                operator: 'lessThanXPercentThanCompetitor',
                value: '15',
              },
            ],
          },
        ],
      },
      event: {
        type: 'event',
        params: {
          message:
            'Ups !! estas al menos un 15% bajo la competencia, estas seguro de este precio ?  ;)',
        },
      },
    },
    {
      id: 2,
      name: 'ruleSample2',
      description: 'description rule',
      conditions: {
        all: [
          {
            all: [
              {
                fact: 'price',
                operator: 'greaterThanXPercentThanCompetitor',
                value: '15',
              },
            ],
          },
        ],
      },
      event: {
        type: 'event',
        params: {
          message:
            'Cuidado !! baja un poquito tu precio, estas sobre el 15% que tu competencia',
        },
      },
    },
    {
      id: 3,
      name: 'ruleSample3',
      description: 'description rule',
      conditions: {
        all: [
          {
            all: [
              {
                fact: 'price',
                operator: 'betweenXPercentThanCompetitor',
                value: '15',
              },
            ],
          },
        ],
      },
      event: {
        type: 'event',
        params: {
          message:
            'Excelente !! tu precio esta en un rango de 15% en comparacion a tu competencia, <3 !!',
        },
      },
    },
    {
      id: 4,
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
            ],
          },
        ],
      },
      event: {
        type: 'event',
        params: {
          message:
            'Ojo !! tu precio es el mismo que la competencia, si bajas un poco el precio seras un champion !!',
        },
      },
    },
  ]

  return rules
}
