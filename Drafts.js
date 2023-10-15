
db.createCollection('Package', {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            required: ['package_id', 'active_delivery', 'description', 'weight', 'width', 'height', 'from_location', 'to_location'],
            properties: {
                package_id: {
                    bsonType: 'string'
                },
                active_delivery: {
                    bsonType: 'string'
                },
                description: {
                    bsonType: 'string'
                },
                weight: {
                    bsonType: 'int'
                },
                width: {
                    bsonType: 'int'
                },
                height: {
                    bsonType: 'int'
                },
                from_location: {
                    bsonType: 'object',
                    properties: {
                        lat: {
                            bsonType: 'double'
                        },
                        lng: {
                            bsonType: 'double'
                        }
                    }
                },
                to_location: {
                    bsonType: 'object',
                    properties: {
                        lat: {
                            bsonType: 'double'
                        },
                        lng: {
                            bsonType: 'double'
                        }
                    }
                }
            }
        }
    }
});

db.createCollection('Delivery', {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            required: ['delivery_id', 'package_id', 'pickup_time', 'start_time', 'end_time', 'location', 'status'],
            properties: {
                delivery_id: {
                    bsonType: 'string'
                },
                package_id: {
                    bsonType: 'string'
                },
                pickup_time: {
                    bsonType: 'timestamp'
                },
                start_time: {
                    bsonType: 'timestamp'
                },
                end_time: {
                    bsonType: 'timestamp'
                },
                location: {
                    bsonType: 'object',
                    properties: {
                        lat: {
                            bsonType: 'double'
                        },
                        lng: {
                            bsonType: 'double'
                        }
                    }
                },
                status: {
                    enum: ['open', 'picked-up', 'in-transit', 'delivered', 'failed']
                }
            }
        }
    }
});


db.createCollection('Package', {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            required: ['package_id', 'active_delivery', 'description', 'weight', 'width', 'height', 'from_location', 'to_location'],
            properties: {
                package_id: {
                    bsonType: 'string'
                },
                active_delivery: {
                    bsonType: 'string'
                },
                description: {
                    bsonType: 'string'
                },
                weight: {
                    bsonType: 'int'
                },
                width: {
                    bsonType: 'int'
                },
                height: {
                    bsonType: 'int'
                },
                from_location: {
                    bsonType: 'object',
                    properties: {
                        lat: {
                            bsonType: 'double'
                        },
                        lng: {
                            bsonType: 'double'
                        }
                    }
                },
                to_location: {
                    bsonType: 'object',
                    properties: {
                        lat: {
                            bsonType: 'double'
                        },
                        lng: {
                            bsonType: 'double'
                        }
                    }
                }
            }
        }
    }
});

db.createCollection('Delivery', {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            required: ['delivery_id', 'package_id', 'pickup_time', 'start_time', 'end_time', 'location', 'status'],
            properties: {
                delivery_id: {
                    bsonType: 'string'
                },
                package_id: {
                    bsonType: 'string'
                },
                pickup_time: {
                    bsonType: 'date'
                }, // Utilise 'date' au lieu de 'timestamp' pour MongoDB
                start_time: {
                    bsonType: 'date'
                },
                end_time: {
                    bsonType: 'date'
                },
                location: {
                    bsonType: 'object',
                    properties: {
                        lat: {
                            bsonType: 'double'
                        },
                        lng: {
                            bsonType: 'double'
                        }
                    }
                },
                status: {
                    enum: ['open', 'picked-up', 'in-transit', 'delivered', 'failed']
                }
            }
        }
    }
});
